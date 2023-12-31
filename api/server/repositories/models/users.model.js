const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const users = sequelize.define(
        "users",
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
            username: {
                allowNull: false,
                type: DataTypes.STRING,
                field: "username",
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING,
                field: "password",
            },
            role: {
                allowNull: false,
                type: DataTypes.ENUM,
                values: ["admin", "user", "seller"],
                field: "role",
            },
            firstName: {
                type: DataTypes.STRING,
                field: "first_name",
            },
            lastName: {
                type: DataTypes.STRING,
                field: "last_name",
            },
            phoneNumber: {
                type: DataTypes.STRING,
                field: "phone_number",
            },
            address: {
                type: DataTypes.STRING,
                field: "address",
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
            modelName: "users",
            tableName: "users",
            timestamps: true,
        }
    );

    users.associate = (models) => {
        users.hasMany(models.payments, {
            foreignKey: { name: "userId", field: "user_id" },
        });
        users.hasMany(models.orders, {
            foreignKey: { name: "userId", field: "user_id" },
        });
        users.hasMany(models.products, {
            foreignKey: { name: "userId", field: "user_id" },
        });
    };

    return users;
};
