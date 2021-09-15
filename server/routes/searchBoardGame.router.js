const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET request to retrieve all created parties from the user
router.post('/', (req, res) => {
    console.log('Board Game to search:', req.body.boardGame);
    

    const sqlText = `
        SELECT * FROM "parties"
        WHERE "board_game" = $1
        ORDER BY "board_game" ASC
        `;
    const sqlParams = [req.body.boardGame];

    pool.query(sqlText, sqlParams).then(result => {
        console.log('My Parties response', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.error('My Parties response error', error);
        res.sendStatus(500);
    })
});

module.exports = router;