const { Router } = require('express');
const {
    getPaymentController,
    getPaymentByIdController,
    postPaymentController,
    patchPaymentController,
    deletePaymentController,
} = require('../controllers/payment');

const router = Router();

router.get('/', getPaymentController);
router.get('/:id', getPaymentByIdController);
router.post('/', postPaymentController);
router.patch('/', patchPaymentController);
router.delete('/:id', deletePaymentController);

module.exports = router;