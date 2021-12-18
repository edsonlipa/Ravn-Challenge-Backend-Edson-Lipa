const { DataTypes } = require("sequelize/dist");

module.exports = (sequelize) => {

    /**
     * Defining books table
     */
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