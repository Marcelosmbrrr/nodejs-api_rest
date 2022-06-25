// Express
const express = require("express");
const router = express.Router();
// Connection
const db = require('../config/db.config');
// Controller
const UserController = require("../controllers/UserController");

router.route("/", (req, res) => res.send("NodeJS + Express"));
// User api
router.route("/user").get(UserController.findAll).post(UserController.createUser);
router.route("/user/:id").get(UserController.findOne).patch(UserController.updateOne).delete(UserController.deleteOne);

module.exports = router;
