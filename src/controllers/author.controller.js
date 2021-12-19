const db = require("../models");
const { QueryTypes } = require('sequelize');
const Author = db.authors;

exports.authorsOderByBrith = (req,res) => {

    const limit = req.query.count ? req.query.count : 10;

    Author.findAll({
        order: [
            ['date_of_birth','ASC']
        ],
        limit: limit
    })
    .then(data => {
        let statusCode = data.length === 0 ? 404 : 200;
        let message = data.length===0 ? "Authors not found" : "success";
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

exports.getRevenueRanked = (req,res) => {

    const limit = req.query.count ? req.query.count : 10;
    db.sequelize.query(
        "SELECT authors.name, SUM(sale_items.item_price) as revenue FROM authors\
        JOIN books ON books.author_id = authors.id\
        JOIN sale_items ON sale_items.book_id = books.id\
        GROUP BY authors.name\
        ORDER BY revenue\
        DESC LIMIT ?",
        {
            replacements: [limit],
            type: QueryTypes.SELECT
        }
    ).then(data => {
        let statusCode = data.length === 0 ? 404 : 200;
        let message = data.length===0 ? "No authors revenue were not found" : "OK";
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