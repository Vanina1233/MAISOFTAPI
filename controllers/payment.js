const {
    createPayment,
    readPayment,
    readPaymentById,
    updatePayment,
    deletePayment,
} = require('../models/payment');

const getPaymentController = (_req, res) => {
    readPayment((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ success: 1, payment: result });
        }
    });
};

const getPaymentByIdController = (req, res) => {
    const id = req.params.id;
    readPaymentById(id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ success: 1, payment: result[0] });
        }
    });
};

const postPaymentController = (req, res) => {
    const data = req.body;
    createPayment(data, (err, result) => {
        if (err) {
            const errRes = error[err.code];
            res.status(errRes.status).json({
                success: 0,
                message: errRes.message,
            });
        } else if (result.affectedRows) {
            res.json({ success: 1, message: 'Payment created !' });
        }
    });
};

const patchPaymentController = (req, res) => {
    const data = req.body;
    updatePayment(data, (err, result) => {
        if (err) {
            console.log(err);
        } else if (result.affectedRows) {
            res.json({ success: 1, message: 'Payment updated !' });
        }
    });
};

const deletePaymentController = (req, res) => {
    const id = req.params.id;
    deletePayment(id, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.affectedRows) {
            res.json({ success: 1, message: 'Payment deleted !' });
        }
    });
};

module.exports = {
    getPaymentController,
    getPaymentByIdController,
    postPaymentController,
    patchPaymentController,
    deletePaymentController,
};