const {
    createSupplier,
    deleteSupplier,
    readSupplier,
    readSupplierById,
    updateSupplier,
} = require('../models/supplier');

const getSupplierController = (_req, res) => {
    readSupplier((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ success: 1, suppliers: result });
        }
    });
};

const getSupplierByIdController = (req, res) => {
    const id = req.params.id;
    readSupplierById(id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ success: 1, supplier: result });
        }
    });
};

const postSupplierController = (req, res) => {
    const data = req.body;
    createSupplier(data, (err, result) => {
        if (err) {
            console.log(err);
        } else if (result.affectedRows) {
            res.json({ success: 1, message: 'Suppliercreated !' });
        }
    });
};

const patchSupplierController = (req, res) => {
    const data = req.body;
    updateSupplier(data, (err, result) => {
        if (err) {
            console.log(err);
        } else if (result.affectedRows) {
            res.json({ success: 1, message: 'Supplierupdated !' });
        }
    });
};

const deleteSupplierController = (req, res) => {
    const id = req.params.id;
    deleteSupplier(id, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.affectedRows) {
            res.json({ success: 1, message: 'Supplier deleted !' });
        }
    });
};

module.exports = {
    getSupplierController,
    getSupplierByIdController,
    postSupplierController,
    patchSupplierController,
    deleteSupplierController,
};