const db = require("../models");
const { QueryTypes } = require('sequelize');
const Author = db.authors;


exports.authorsOderByBrith = (req,res) => {

    const limit = req.query.count ? req.query.count : 10;

    //Select * from authors ORDER BY date_of_birth limit 10;
    Author.findAll({
        order: [
            ['date_of_birth','ASC']
        ],
        limit: limit
    })
    .then(data => {
        let statusCode = data ? 200 : 404  ;
        let message = data ? "OK" : "Error on apis@authorsOderByBrith";
        res.status(statusCode).send({
            status: statusCode,
            message: message,
            body: data
        });
    })
    .catch(err =>{
        res.status(400).send({
            status: 400,
            message: err.message
        });
    });
}

exports.getTotalSalesByAuthor = (req, res) => {

    const name = req.query.name;
    
    if(!name){
        res.status(400).send({
            status: 400,
            message: "You must specify the \"name\" parameter"
        });
    }
    
    db.sequelize.query(
        "Select authors.name , sum(sale_items.item_price * sale_items.quantity) as total_sales from sale_items\
        join books on sale_items.book_id=books.id \
        join authors on authors.id = books.author_id\
        where authors.name = ? group by authors.name;",
        {
            replacements: [name],
            type: QueryTypes.SELECT
        }
    ).then(data => {
        let statusCode = data ? 200 : 404  ;
        let message = data ? "OK" : "Error on apis@getTotalSalesByAuthor";
        res.status(statusCode).send({
            status: statusCode,
            message: message,
            body: data
        });
    })
    .catch(err => {
        res.status(400).send({
            status: 400,
            message: err.message
        });
    });
}

exports.getTopNPerformingAuthors = (req,res) => {

    const limit = req.query.count ? req.query.count : 10;

    db.sequelize.query(

        "Select authors.name , sum(sale_items.item_price * sale_items.quantity) as total_sales from sale_items \
        join books on sale_items.book_id=books.id \
        join authors on authors.id = books.author_id \
        group by authors.name order by total_sales desc limit ?;",
        {
            replacements: [limit],
            type: QueryTypes.SELECT
        }
    ).then(data => {
        let statusCode = data ? 200 : 404  ;
        let message = data ? "OK" : "Error on apis@getTopNPerformingAuthors";
        res.status(statusCode).send({
            status: statusCode,
            message: message,
            body: data
        });
    })
    .catch(err => {
        res.status(400).send({
            status: 400,
            message: err.message
        });
    });
}