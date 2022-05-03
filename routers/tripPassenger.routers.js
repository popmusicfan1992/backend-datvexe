const express = require("express");
const {createTripPassenger, getAllTripPassenger, getDetailTripPassenger, deleteTripPassenger, updateTripPassenger, getAllTripPassengerNew, confirmTripPassenger} = require("../controllers/tripPassenger.controller");
const {checkExist} = require("../middlewares/validations/checkExist");
const {TripPassenger} = require("../models");

const tripPassengerRouter = express.Router();
tripPassengerRouter.get("/trip2", getAllTripPassengerNew);
tripPassengerRouter.post("/", createTripPassenger);
tripPassengerRouter.get("/", getAllTripPassenger);
tripPassengerRouter.get("/:id", getDetailTripPassenger);

tripPassengerRouter.delete("/:id", deleteTripPassenger);
tripPassengerRouter.put("/:id", checkExist(TripPassenger), updateTripPassenger);
tripPassengerRouter.put("/confirm/:id", checkExist(TripPassenger), confirmTripPassenger);

module.exports = {tripPassengerRouter};
