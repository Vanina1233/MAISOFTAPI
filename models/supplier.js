const { connection } = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createSupplier = (data, callback) => {
    connection.query(
        'INSERT INTO `supplier` (`id`, `name`, `email`,`phone` ,`address`,`description`) VALUES (?,?,?,?,?,?)',
        [
            uuidv4(),
            data.name,
            data.email,
            data.phone,
            data.address,
            data.description
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

const readSupplier = (callback) => {
    connection.query('SELECT * FROM `supplier`', (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};

const readSupplierById = (id, callback) => {
    connection.query('SELECT * FROM `supplier` WHERE id = ?', [id], (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};

const updateSupplier = (data, callback) => {
    connection.query(
        'UPDATE `supplier` SET  `name` = ?,`email` = ?, `phone` = ? ,`address` =?,`description` = ? WHERE   id = ? ',
        [
            data.name,
            data.email,
            data.phone,
            data.address,
            data.description,
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

const deleteSupplier = (id, callback) => {
    connection.query('DELETE FROM `supplier` WHERE id = ?', [id], (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};

module.exports = {
    createSupplier,
    readSupplier,
    readSupplierById,
    updateSupplier,
    deleteSupplier,
};