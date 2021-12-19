const { DataTypes } = require("sequelize");


module.exports = (sequelize)=>{

    const SaleItem = sequelize.define("sale_items", {
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'books',
                key: 'id'
            }
        },
        customer_name: {
            type: DataTypes.TEXT
        },
        item_price: {
            type: DataTypes.DECIMAL(10,2)
        }
    });

    return SaleItem;
}