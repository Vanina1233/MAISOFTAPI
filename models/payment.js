const { connection } = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createPayment = (data, callback) => {
    connection.query(
        'INSERT INTO `payment_method` (`id`, `number`, `cvv`,`fullname` ,`expiry_date`,`type`) VALUES (?,?,?,?,?,?)',
        [
            uuidv4(),
            data.number,
            data.cvv,
            data.fullname,
            data.expiry_date,
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

const readPayment = (callback) => {
    connection.query('SELECT * FROM `payment_method`', (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};

const readPaymentById = (id, callback) => {
    connection.query('SELECT * FROM `payment_method` WHERE id = ?', [id], (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};

const updatePayment = (data, callback) => {
    connection.query(
        'UPDATE `payment_method` SET  `number` = ?,`cvv` = ?, `fullname` = ? ,`expiry_date` =?,`type` = ? WHERE   id = ? ',
        [
            data.number,
            data.cvv,
            data.fullname,
            data.expiry_date,
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

const deletePayment = (id, callback) => {
    connection.query('DELETE FROM `payment_method` WHERE id = ?', [id], (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};

module.exports = {
    createPayment,
    readPayment,
    readPaymentById,
    updatePayment,
    deletePayment,
};