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
        SELECT
            "board_game",
            "number_of_players",
            "experience",
            "parties"."location",
            "date_time",
	        "username"
        FROM "parties"
        JOIN "user"
	        ON "parties".user_id = "user".id
        WHERE "date_time" >= now()::timestamp
        ORDER BY "date_time" ASC
        LIMIT 4;
    `;
    pool.query(sqlText).then(result => {
        console.log('Recent Posts Results', result.rows);
        res.send(result.rows)
    }).catch(error => {
        console.error('Recent Posts Error', error);
    })
});

module.exports = router;