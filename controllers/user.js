const {
    createUser,
    deleteUser,
    readUser,
    readUserById,
    updateUser,
    readUserByEmail
} = require('../models/user');

const { error } = require('../error');
const { hashGenerator } = require('../utils/hashGenerator');
const { isHash } = require('../utils/compareHash');
const { tokenGenerator } = require('../utils/tokenGenerator');

// const getUserController = (_req, res) => {
//     readUser((err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json({ success: 1, users: result });
//         }
//     });
// };

const getUserByIdController = (req, res) => {
    const id = req.params.id;
    readUserById(id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ success: 1, user: result[0] });
        }
    });
};

const postRegisterUserController = async (req, res) => {
    const body = req.body;
    const hash = await hashGenerator(body.password);// changed hash to hash1
    const data = { ...body, hash };//spread operator
    createUser(data, (err, result) => {
        if (err) {
            const errRes = error[err.code];
            res.status(errRes.status).json({
                success: 0,
                message: errRes.message,
            });
        } else if (result.affectedRows) {
            const token = tokenGenerator(result.id);
            res.json({ success: 1, message: 'User created !', token });
        }
    });
};

const postLoginUserController = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;//changed body.password to body.hash

    readUserByEmail(email, async (err, result) => {
        if (err) {
            console.log(err);
        } else {
            const isMatch = await isHash(password, result[0].hash);
            if (isMatch) {
                const token = tokenGenerator(result[0].id);
                res.json({ success: 1, user: result[0], token });
            } else {
                res.json({ success: 0, message: 'Authorized' });
            }
        }
    });
};

const patchUserController = (req, res) => {
    const data = req.body;
    updateUser(data, (err, result) => {
        if (err) {
            console.log(err);
        } else if (result.affectedRows) {
            res.json({ success: 1, message: 'User updated !' });
        }
    });
};

// const deleteUserController = (req, res) => {
//     const id = req.params.id;
//     deleteUser(id, (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         if (result.affectedRows) {
//             res.json({ success: 1, message: 'User deleted !' });
//         }
//     });
// };

module.exports = {
    getUserByIdController,
    postRegisterUserController,
    patchUserController,
    postLoginUserController,
};