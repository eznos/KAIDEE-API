const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const orders = sequelize.define(
        "orders",
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
            modelName: "orders",
            tableName: "orders",
            timestamps: true,
        }
    );

    orders.associate = (models) => {
        orders.belongsTo(models.users, {
            foreignKey: { name: "userId", field: "user_id" },
        });
        orders.hasMany(models.products, {
            foreignKey: { name: "orderId", field: "order_id" },
        });
        orders.hasMany(models.payments, {
            foreignKey: { name: "orderId", field: "order_id" },
        });
        orders.hasMany(models.reports, {
            foreignKey: { name: "orderId", field: "order_id" },
        });
    };

    return orders;
};
