const express = require('express');
const { getItems, addItem } = require('../controllers/itemControllers');

const router = express.Router();

router.get('/', getItems);
router.post('/', addItem);

module.exports = router;
