const { connection } = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createUser = (data, callback) => {
    connection.query(
        'INSERT INTO `user` (`id`, `firstname`, `lastname`, `email` ,`hash`, `username`, `country`, `address`,`phone`,`created_at`,`updated_at`, `type`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        [
            uuidv4(),
            data.firstname,
            data.lastname,
            data.email,
            data.hash,
            data.username,
            data.country,
            data.address,
            data.phone,
            new Date(),
            new Date(),
            data.type
        ],
        (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        }
    );
};

const readUser = (callback) => {
    connection.query('SELECT * FROM `user`', (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};

const readUserById = (id, callback) => {
    connection.query('SELECT * FROM `user` WHERE id = ?', [id], (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};

const updateUser = (data, callback) => {
    connection.query(
        'UPDATE `user` SET  `firstname` = ?, `lastname` = ?, `email` = ?,`hash` = ?, `username` = ?, `country`= ?, `address` =?, `phone` = ? , `updatedAt` = ?, `type` = ? WHERE   id = ? ',
        [
            data.firstname,
            data.lastname,
            data.email,
            data.hash,
            data.username,
            data.country,
            data.address,
            data.phone,
            new Date(),
            data.type,
            data.id,
        ],
        (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        }
    );
};

const deleteUser = (id, callback) => {
    connection.query('DELETE FROM `user` WHERE id = ?', [id], (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};

module.exports = {
    createUser,
    readUser,
    readUserById,
    updateUser,
    deleteUser,
};