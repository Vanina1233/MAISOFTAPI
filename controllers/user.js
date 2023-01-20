const {
    createUser,
    deleteUser,
    readUser,
    readUserById,
    updateUser,
} = require('../models/user');

const getUserController = (_req, res) => {
    readUser((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ success: 1, users: result });
        }
    });
};

const getUserByIdController = (req, res) => {
    const id = req.params.id;
    readUserById(id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ success: 1, user: result });
        }
    });
};

const postUserController = (req, res) => {
    const data = req.body;
    createUser(data, (err, result) => {
        if (err) {
            const errRes = error[err.code];
            res.status(errRes.status).json({
                success: 0,
                message: errRes.message,
            });
        } else if (result.affectedRows) {
            res.json({ success: 1, message: 'User created !' });
        }
    });
};

const patchUserController = (req, res) => {
    const data = req.body;
    updateUser(data, (err, result) => {
        if (err) {
            console.log(err);
        } else if (result.affectedRows) {
            res.json({ success: 1, message: 'User updated !' });
        }
    });
};

const deleteUserController = (req, res) => {
    const id = req.params.id;
    deleteUser(id, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.affectedRows) {
            res.json({ success: 1, message: 'User deleted !' });
        }
    });
};

module.exports = {
    getUserController,
    getUserByIdController,
    postUserController,
    patchUserController,
    deleteUserController,
};