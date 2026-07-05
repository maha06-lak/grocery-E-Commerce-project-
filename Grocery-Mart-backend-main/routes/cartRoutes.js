const express = require('express');
const { getCart, addToCart, removeFromCart, clearCart } = require('../controllers/cartControllers');

const router = express.Router();

router.get('/:userId', getCart);
router.post('/', addToCart);
router.delete('/remove/:userId/:itemId', removeFromCart);
router.delete('/clear/:userId', clearCart);

module.exports = router;
