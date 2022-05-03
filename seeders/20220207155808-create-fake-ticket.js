"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"tickets",
			[
				{
					totalAmount: 700000,
					user_id: 1,
					tripPassengerId: 1,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					totalAmount: 500000,
					user_id: 2,
					tripPassengerId: 2,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					totalAmount: 800000,
					user_id: 3,
					tripPassengerId: 2,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					totalAmount: 700000,
					user_id: 4,
					tripPassengerId: 5,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("tickets", null, {});
	},
};
