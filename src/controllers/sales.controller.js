const db = require("../models");
const { QueryTypes } = require('sequelize');
const Author = db.authors;


//Select * from authors ORDER BY date_of_birth limit 10;
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
        let message = data.length===0 ? "Authors not found" : "OK";
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
