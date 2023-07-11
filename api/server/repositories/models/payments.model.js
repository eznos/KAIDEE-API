const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const payments = sequelize.define(
        "payments",
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
            status: {
                allowNull: false,
                type: DataTypes.ENUM,
                values: ["paid", "unpaid"],
                field: "status",
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
            modelName: "payments",
            tableName: "payments",
            timestamps: true,
        }
    );

    payments.associate = (models) => {
        payments.belongsTo(models.users, {
            foreignKey: { name: "userId", field: "user_id" },
        });
        payments.belongsTo(models.orders, {
            foreignKey: { name: "orderId", field: "order_id" },
        });
        payments.hasMany(models.reports, {
            foreignKey: { name: "paymentId", field: "payment_id" },
        });
    };

    return payments;
};
