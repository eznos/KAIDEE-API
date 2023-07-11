const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const categories = sequelize.define(
        'categories',
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
            type: {
                type: DataTypes.STRING,
                field: "type",
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
            modelName: 'categories',
            tableName: 'categories',
            timestamps: true,
        }
    );

    categories.associate = (models) => {
        categories.hasMany(models.products, {
            foreignKey: { name: "categoryId", field: "category_id" },
        });
    };

    return categories;
};
