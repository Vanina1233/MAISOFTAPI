const { Router } = require('express');
const {
    getPaymentController,
    getPaymentByIdController,
    postPaymentController,
    patchPaymentController,
    deletePaymentController,
} = require('../controllers/payment');

const { checkAuth } = require('../controllers/check-auth');
const router = Router();

router.get('/', checkAuth, getPaymentController);
router.get('/:id', checkAuth, getPaymentByIdController);
router.post('/', checkAuth, postPaymentController);
router.patch('/', checkAuth, patchPaymentController);
router.delete('/:id', checkAuth, deletePaymentController);

module.exports = router;