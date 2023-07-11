const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const reports = sequelize.define(
        "reports",
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
            modelName: "reports",
            tableName: "reports",
            timestamps: true,
        }
    );

    reports.associate = (models) => {
        reports.belongsTo(models.orders, {
            foreignKey: { name: "orderId", field: "order_id" },
        });
        reports.belongsTo(models.products, {
            foreignKey: { name: "productId", field: "product_id" },
        });
        reports.belongsTo(models.payments, {
            foreignKey: { name: "paymentId", field: "payment_id" },
        });
    };

    return reports;
};
