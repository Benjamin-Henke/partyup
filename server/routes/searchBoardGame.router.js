const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET request to retrieve all created parties from the user
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('Board Game to search:', req.query.boardGame);
    
    // ADD PARAM SO PAST GAMES DON'T SHOW UP
    const sqlText = `
        SELECT 
            "parties"."id",
            "board_game",
            "number_of_players",
            "parties"."location",
            "date_time",
            "user"."username",
            "experience",
            "image",
            "description",
            "owner_id"
        FROM "parties"
        JOIN "user" ON "parties"."owner_id" = "user"."id"
        WHERE "board_game" = $1 AND "date_time" >= now()::timestamp
        ORDER BY "date_time" ASC
        `;
    const sqlParams = [req.query.boardGame];   

    pool.query(sqlText, sqlParams).then(result => {
        console.log('Search by game name response', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.error('Search by game name response error', error);
        res.sendStatus(500);
    })
});

module.exports = router;