const { connection } = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const { generateUserName } = require('../utils/username');

const createUser = (data, callback) => {
    const username = generateUserName(data.email);
    const id = uuidv4();
    connection.query(
        'INSERT INTO `user` (`id`, `firstname`, `lastname`, `email` ,`hash`, `username`, `country`, `address`,`phone`,`created_at`,`updated_at`, `type`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        [
            id,
            data.firstname,
            data.lastname,
            data.email,
            data.hash,
            username,
            data.country,
            data.address,
            data.phone,
            new Date(),
            new Date(),
            data.type || 'CLIENT'
        ],
        (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, { ...res, id });
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

const readUserByEmail = (email, callback) => {
    connection.query(
        'SELECT * FROM `user` WHERE email = ?',
        [email],
        (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        }
    );
};

const updateUser = (data, callback) => {
    connection.query(
        'UPDATE `user` SET  `firstname` = ?, `lastname` = ?,`username` = ?,`phone` = ? , `updatedAt` = ? WHERE   id = ? ',
        [
            data.firstname,
            data.lastname,
            data.username,
            data.phone,
            new Date(),
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
    readUserByEmail
};