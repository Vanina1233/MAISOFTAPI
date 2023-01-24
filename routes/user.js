const { Router } = require('express');
const {
    getUserByIdController,
    patchUserController,
    postRegisterUserController,
    postLoginUserController,
} = require('../controllers/user');

const router = Router();

router.get('/:id', getUserByIdController);
router.post('/login', postLoginUserController);
router.post('/register', postRegisterUserController);//to add users
router.patch('/', patchUserController);
module.exports = router;