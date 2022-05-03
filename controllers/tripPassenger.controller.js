const {TripPassenger, PassengerCarCompany, Trip, ImageVehicle, User, Comment, Station, Seats, Vehicles, sequelize, Point, Rate, Ticket, TimePoint} = require("../models");

const getAllTripPassengerNew = async (req, res) => {
	try {
		const [result] = await sequelize.query(
			`select * from trippassengers,trips,passengercarcompanies,vehicles ,imagevehicles
      where  trippassengers.tripId = trips.id and
      passengercarcompanies.id = trippassengers.passengerId and vehicles.id = trippassengers.vehicleId and imagevehicles.vehicleId = vehicles.id
      and trippassengers.tripId = 2 ;`
		);
		res.status(200).send(result);
	} catch (error) {
		res.status(500).send(error);
	}
};

const createTripPassenger = async (req, res) => {
	const {tripId, passengerId, startTime, endTime, vehicleId} = req.body;
	try {
		const TripPassengerFind = await TripPassenger.findOne({
			where: {
				tripId,
				vehicleId,
			},
		});
		if (TripPassengerFind) {
			res.status(404).send("Xe đã được phân vào chuyến khác vui lòng chọn xe hoặc nhà xe khác");
		} else {
			const newTripPassenger = await TripPassenger.create({
				tripId,
				passengerId,
				startTime,
				endTime,
				vehicleId,
			});
			res.status(200).send(newTripPassenger);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};
const getAllTripPassenger = async (req, res) => {
	const {tripId} = req.query;
	try {
		if (tripId) {
			const tripPassengerList = await TripPassenger.findAll({
				where: {
					tripId,
				},

				include: [
					{
						model: PassengerCarCompany,
						as: "passenger",
						include: [
							// {
							// 	model: Comment,
							// 	as: "passengerComment",
							// 	include: [
							// 		{
							// 			model: User,
							// 			as: "userComment",
							// 			include: {
							// 				model: Rate,
							// 				as: "userRate",
							// 			},
							// 		},
							// 	],
							// },
							{
								model: Rate,
								as: "passengerRate",
							},
						],
					},
					{
						model: Trip,
						as: "trip",
						include: [
							{
								model: Station,
								as: "from",
								// include: {
								// 	model: Point,
								// 	as: "stationPoint",
								// },
							},
							{
								model: Station,
								as: "to",
								// include: {
								// 	model: Point,
								// 	as: "stationPoint",
								// },
							},
						],
					},
					{
						model: Vehicles,
						as: "vehicle",
						include: [
							{model: Seats, as: "seatVehicle"},
							// {
							// 	model: ImageVehicle,
							// 	as: "vehicleOfImage",
							// },
						],
					},
					// {
					// 	model: Ticket,
					// 	as: "tripPassengerTicket",
					// },
				],
			});
			res.status(200).send(tripPassengerList);
		} else {
			const tripPassengerList = await TripPassenger.findAll({
				include: [
					{
						model: PassengerCarCompany,
						as: "passenger",
						include: [
							// {
							// 	model: Comment,
							// 	as: "passengerComment",
							// 	include: [
							// 		{
							// 			model: User,
							// 			as: "userComment",
							// 			include: {
							// 				model: Rate,
							// 				as: "userRate",
							// 			},
							// 		},
							// 	],
							// },
							{
								model: Rate,
								as: "passengerRate",
							},
						],
					},
					{
						model: Trip,
						as: "trip",
						include: [
							{
								model: Station,
								as: "from",
								// include: {
								// 	model: Point,
								// 	as: "stationPoint",
								// },
							},
							{
								model: Station,
								as: "to",
								// include: {
								// 	model: Point,
								// 	as: "stationPoint",
								// },
							},
						],
					},
					{
						model: Vehicles,
						as: "vehicle",
						include: [{model: Seats, as: "seatVehicle"}],
					},
					// {
					// 	model: Ticket,
					// 	as: "tripPassengerTicket",
					// },
				],
			});

			res.status(200).send(tripPassengerList);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};
const getDetailTripPassenger = async (req, res) => {
	const {id} = req.params;

	try {
		const detailTrip = await TripPassenger.findOne({
			where: {
				id,
			},
			include: [
				{
					model: PassengerCarCompany,
					as: "passenger",
				},
				{
					model: Trip,
					as: "trip",
				},
				{
					model: Vehicles,
					as: "vehicle",
				},
				{
					model: Ticket,
					as: "tripPassengerTicket",
				},
			],
		});
		res.status(200).send(detailTrip);
	} catch (error) {
		res.status(500).send(error);
	}
};
const deleteTripPassenger = async (req, res) => {
	const {id} = req.params;
	try {
		await TripPassenger.destroy({
			where: {
				id,
			},
		});
		res.status(200).send(`Đã xóa trip có id là: ${id}`);
	} catch (error) {
		res.status(500).send(error);
	}
};
const updateTripPassenger = async (req, res) => {
	const {id} = req.params;
	const {tripId, status, passengerId, startTime, endTime, vehicleId} = req.body;
	try {
		await TripPassenger.update(
			{tripId, status, passengerId, startTime, endTime, vehicleId},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).send("update trip thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};

const confirmTripPassenger = async (req, res) => {
	const {id} = req.params;
	const {status} = req.body;
	try {
		await TripPassenger.update(
			{status},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).send("confirm trip thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	createTripPassenger,
	getAllTripPassenger,
	getDetailTripPassenger,
	deleteTripPassenger,
	updateTripPassenger,
	getAllTripPassengerNew,
	confirmTripPassenger,
};
