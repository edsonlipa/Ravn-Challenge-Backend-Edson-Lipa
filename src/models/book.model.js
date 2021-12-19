const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    const Book = sequelize.define("books", {
        author_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'authors',
                key: 'id'
            }
        },
        isbn: {
            type: DataTypes.TEXT
        }
    });

    return Book;
}