const { connection } = require('../config/db');
const { v4: uuidv4 } = require('uuid');



const createOrder = (data, callback) => {
    const Oemail = connection.query(
        'SELECT id FROM `user` WHERE email = ?',
        [data.email]
    );
    connection.query(
        'INSERT INTO `order` (`id`, `ref`, `email`, `address`, `total_amount`, `discount`, `delivery_date`, `status`, `created_at`, `updated_at`, `user_id`, `payment_method_id`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ',

    );
};