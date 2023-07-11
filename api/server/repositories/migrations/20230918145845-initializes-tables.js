const { DataTypes, Deferrable } = require("sequelize");

module.exports = {
	async up(queryInterface) {
		await queryInterface.createTable(
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
				userId: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					field: 'user_id',
					references: {
						model: 'users',
						key: 'id',
						deferrable: Deferrable.INITIALLY_IMMEDIATE,
					},
				},
				orderId: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					field: 'order_id',
					references: {
						model: 'orders',
						key: 'id',
						deferrable: Deferrable.INITIALLY_IMMEDIATE,
					},
				},
				categoryId: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					field: 'category_id',
					references: {
						model: 'categories',
						key: 'id',
						deferrable: Deferrable.INITIALLY_IMMEDIATE,
					},
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
				indexes: [{ fields: ["name", "brand"] }],
			}
		);
		await queryInterface.createTable(
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
				userId: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					field: 'user_id',
					references: {
						model: 'users',
						key: 'id',
						deferrable: Deferrable.INITIALLY_IMMEDIATE,
					},
				},
				orderId: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					field: 'order_id',
					references: {
						model: 'orders',
						key: 'id',
						deferrable: Deferrable.INITIALLY_IMMEDIATE,
					},
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
				indexes: [{ fields: ["status"] }],
			}
		);
		await queryInterface.createTable(
			"categories",
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
				indexes: [{ fields: ["name", "type"] }],
			}
		);
		await queryInterface.createTable(
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
				indexes: [{ fields: ["first_name", "last_name", "role"] }],
			}
		);
		await queryInterface.createTable(
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
				orderId: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					field: 'order_id',
					references: {
						model: 'orders',
						key: 'id',
						deferrable: Deferrable.INITIALLY_IMMEDIATE,
					},
				},
				produstId: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					field: 'produst_id',
					references: {
						model: 'produsts',
						key: 'id',
						deferrable: Deferrable.INITIALLY_IMMEDIATE,
					},
				},
				paymentId: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					field: 'payment_id',
					references: {
						model: 'payments',
						key: 'id',
						deferrable: Deferrable.INITIALLY_IMMEDIATE,
					},
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
				indexes: [{ fields: ["id"] }],
			}
		);
		await queryInterface.createTable(
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
				userId: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					field: 'user_id',
					references: {
						model: 'users',
						key: 'id',
						deferrable: Deferrable.INITIALLY_IMMEDIATE,
					},
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
				indexes: [{ fields: ["id"] }],
			}
		);
	},

	async down(queryInterface) {
		await queryInterface.dropAllTables();
		await queryInterface.removeIndex("reports", ["id"]);
		await queryInterface.removeIndex("users", ["first_name", "last_name", "role"]);
		await queryInterface.removeIndex("categories", ["name", "type"]);
		await queryInterface.removeIndex("payments", ["status"]);
		await queryInterface.removeIndex("products", ["name", "brand"]);
		await queryInterface.removeIndex("orders", ["id"]);
		await queryInterface.dropAllEnums();
	},
};
