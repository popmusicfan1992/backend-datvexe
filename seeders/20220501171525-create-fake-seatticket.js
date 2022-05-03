"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"seattickets",
			[
				{
					ticketId: 1,
					seatId: 10,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					ticketId: 1,
					seatId: 11,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					ticketId: 2,
					seatId: 1,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					ticketId: 3,
					seatId: 2,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					ticketId: 4,
					seatId: 29,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					ticketId: 4,
					seatId: 30,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("seattickets", null, {});
	},
};
