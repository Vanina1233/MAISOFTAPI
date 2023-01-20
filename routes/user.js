const { Router } = require('express');
const {
    getUserController,
    deleteUserController,
    getUserByIdController,
    patchUserController,
    postUserController,
} = require('../controllers/user');

const router = Router();

router.get('/', getUserController);
router.get('/:id', getUserByIdController);
router.post('/', postUserController);
router.patch('/', patchUserController);
router.delete('/:id', deleteUserController);

module.exports = router;