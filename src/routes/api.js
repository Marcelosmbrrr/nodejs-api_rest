// Express
const express = require("express");
const router = express.Router();
// Connection
const db = require('../config/db.config');
// Controller
const UserController = require("../controllers/UserController");

router.route("/", (req, res) => res.send("NodeJS + Express"));
// User api
router.route("/user").get(UserController.index).post(UserController.store);
router.route("/user/:id").get(UserController.show).patch(UserController.update).delete(UserController.destroy);

module.exports = router;
