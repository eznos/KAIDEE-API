const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const products = sequelize.define(
        "products",
        {
            id: {
                unique: true,
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                field: "id",
                comment: "ไอดีของตาราง",
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
                field: "name",
            },
            description: {
                type: DataTypes.TEXT,
                field: "description",
            },
            price: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: "price",
            },
            brand: {
                allowNull: false,
                type: DataTypes.STRING,
                field: "brand",
            },
            amount: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: "amount",
            },
            image: {
                type: DataTypes.STRING,
                field: "image",
            },
            deleted: {
                type: DataTypes.BOOLEAN,
                field: "deleted",
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                field: "created_at",
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                field: "updated_at",
            },
        },
        {
            sequelize,
            modelName: "products",
            tableName: "products",
            timestamps: true,
        }
    );

    products.associate = (models) => {
        products.belongsTo(models.users, {
            foreignKey: { name: "userId", field: "user_id" },
        });
        products.belongsTo(models.orders, {
            foreignKey: { name: "orderId", field: "order_id" },
        });
        products.belongsTo(models.categories, {
            foreignKey: { name: "categoryId", field: "category_id" },
        });
    };

    return products;
};
