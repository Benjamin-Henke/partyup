const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET the 5 most recent posts
        // Will i need to timestamp the database when a user creates a user?
});

module.exports = router;