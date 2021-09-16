const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET request to retrieve all created parties from the user
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('Board Game to search:', req.query.boardGame);

});

module.exports = router;