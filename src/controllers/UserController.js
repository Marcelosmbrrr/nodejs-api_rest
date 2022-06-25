const { connect } = require("http2");
const db = require("../config/db.config");

class UserController {

    /*
    * Find all users.
    */
    findAll(req, res) {

        db.query("SELECT * FROM users", (error, result, field) => {
            conn.release();

            if (error) {
                res.status(500).send({
                    error: error,
                    response: null
                });
            }

            res.status(200).send({
                message: "All users were found.",
                response: result
            });

        });

    }

    /*
    * Find one user.
    */
    findOne(req, res) {

        db.query("SELECT * FROM users WHERE id = ?", [req.body.id], (error, result, field) => {
            conn.release();

            if (error) {
                res.status(500).send({
                    error: error,
                    response: null
                });
            }

            res.status(200).send({
                message: "User was found.",
                response: result
            });

        });

    }

    /*
    * Update one user.
    */
    updateOne(request, id) {

        db.query("UPDATE SET name = ?, sex = ?, email = ? WHERE id = ?", [req.body.name, req.body.sex, req.body.email, req.body.id], (error, result, field) => {
            conn.release();

            if (error) {
                res.status(500).send({
                    error: error,
                    response: null
                });
            }

            res.status(200).send({
                message: "User successful updated!",
                response: result
            });

        });

    }

    /*
    * Delete one user.
    */
    deleteOne(id) {

        db.query("DELETE FROM users WHERE id = ?", [req.body.id], (error, result, field) => {
            conn.release();

            if (error) {
                res.status(500).send({
                    error: error,
                    response: null
                });
            }

            res.status(200).send({
                message: "User successful deleted!",
                response: result
            });

        });

    }

}

module.exports = UserController;