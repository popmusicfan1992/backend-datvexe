"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"timepoints",
			[
				{
					time: "14:00:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 2,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "15:00:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 2,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "15:00:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 2,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},

				{
					time: "18:00:00",
					type: "dropoff",
					pointId: 9,
					tripPassengerId: 2,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "18:00:00",
					type: "dropoff",
					pointId: 10,
					tripPassengerId: 2,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "18:00:00",
					type: "dropoff",
					pointId: 11,
					tripPassengerId: 2,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "14:00:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 3,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "15:00:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 3,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "15:00:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 3,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},

				{
					time: "18:00:00",
					type: "dropoff",
					pointId: 9,
					tripPassengerId: 3,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "18:00:00",
					type: "dropoff",
					pointId: 10,
					tripPassengerId: 3,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "18:00:00",
					type: "dropoff",
					pointId: 11,
					tripPassengerId: 3,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},

				{
					time: "8:30:00",
					type: "pickup",
					pointId: 1,
					tripPassengerId: 1,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "8:30:00",
					type: "pickup",
					pointId: 2,
					tripPassengerId: 1,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "14:00:00",
					type: "dropoff",
					pointId: 6,
					tripPassengerId: 1,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "14:00:00",
					type: "dropoff",
					pointId: 7,
					tripPassengerId: 1,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
				{
					time: "14:00:00",
					type: "dropoff",
					pointId: 8,
					tripPassengerId: 1,
					createdAt: "2022-02-07 07:57:23",
					updatedAt: "2022-02-07 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("timepoints", null, {});
	},
};
