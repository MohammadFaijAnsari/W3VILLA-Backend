const express = require('express');
const router = express.Router();

const { handlegenerateshortURL } = require('../controller/url');

// POST request for creating a short URL
router.post('/', handlegenerateshortURL);

module.exports = router;
