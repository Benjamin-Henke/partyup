const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// POST users inputs to the database
router.post('/', rejectUnauthenticated,(req, res) => {
    const sqlText = `
        INSERT INTO "parties" ("board_game", "number_of_players", "experience", "location", "date_time", "user_id")
        VALUES ($1, $2, $3, $4, $5, $6)
        `;

    const sqlParams = [
        req.body.boardGame,
        req.body.numberOfPlayers,
        req.body.experience,
        req.body.location,
        req.body.dateTime,
        req.user.id
    ]

    pool.query(sqlText, sqlParams).then(response => {
        console.log('Create Party POST working', response);
        res.sendStatus(201)
    }).catch(error => {
        console.error('Create Party Post Error', error);
        res.sendStatus(500);
    })
});

module.exports = router;