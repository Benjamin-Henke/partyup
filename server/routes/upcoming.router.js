const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    // GET the 5 most recent posts
        // Will i need to timestamp the database when a user creates a user?
    let sqlText = `
        SELECT
           "parties"."id",
           "board_game",
           "number_of_players",
           "parties"."location",
           "date_time",
           "user"."username",
           "user"."email",
           "experience",
           "image",
           "description",
           "owner_id"
        FROM "parties"
        JOIN "user"
	        ON "parties".owner_id = "user".id
        WHERE "date_time" >= now()::timestamp
        ORDER BY "date_time" ASC
        LIMIT 10;
    `;
    pool.query(sqlText).then(result => {
        console.log('Recent Posts Results', result.rows);
        res.send(result.rows)
    }).catch(error => {
        console.error('Recent Posts Error', error);
    })
});

module.exports = router;