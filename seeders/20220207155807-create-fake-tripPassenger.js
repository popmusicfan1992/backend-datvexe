"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"trippassengers",
			[
				{
					tripId: 1,
					passengerId: 2,
					startTime: "08:30:00",
					endTime: "14:00:00",
					vehicleId: 1,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					tripId: 2,
					passengerId: 3,
					startTime: "14:30:00",
					endTime: "18:00:00",
					vehicleId: 4,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					tripId: 2,
					passengerId: 4,
					startTime: "14:30:00",
					endTime: "18:00:00",
					vehicleId: 5,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					tripId: 3,
					passengerId: 2,
					startTime: "09:30:00",
					endTime: "15:00:00",
					vehicleId: 2,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					tripId: 4,
					passengerId: 4,
					startTime: "7:30:00",
					endTime: "12:00:00",
					vehicleId: 3,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					tripId: 5,
					passengerId: 2,
					startTime: "08:30:00",
					endTime: "14:00:00",
					vehicleId: 1,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("trippassengers", null, {});
	},
};
