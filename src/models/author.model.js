const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    const Author = sequelize.define("authors",{
        name: {
            type: DataTypes.TEXT,
        },
        date_of_birth: {
            type: DataTypes.DATE
        },
    },{
        timestamps: false
    });

    return Author;
}