const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET the 5 most recent posts
        // Will i need to timestamp the database when a user creates a user?
    let sqlText = `
        SELECT FROM "parties"
        ORDER BY "date_time" ASC
        LIMIT 5;
    `;
    pool.query(sqlText).then(result => {
        console.log('Recent Posts Results', result.rows);
        res.send(result.rows)
    }).catch(error => {
        console.error('Recent Posts Error');
    })
});

module.exports = router;