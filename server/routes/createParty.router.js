const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// POST users inputs to the database
router.post('/', rejectUnauthenticated,(req, res) => {
    const sqlText = `
        INSERT INTO "parties" ("board_game", "number_of_players", "experience", "location", "date_time", "owner_id")
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING "id";
        `;

    const sqlParams = [
        req.body.boardGame,
        req.body.numberOfPlayers,
        req.body.experience,
        req.body.location,
        req.body.dateTime,
        req.user.id,
    ];

    // First Query makes the party
    pool.query(sqlText, sqlParams).then(result => {
        console.log('New Party Id:', result.rows[0].id); // ID of the created party

    const insertIntoParty = `
        INSERT INTO "users_parties" ("users_id", "parties_id")
        VALUES ($1, $2)
    `;

    const insertOwnerAndPartyId = [
        req.user.id,            // $1
        result.rows[0].id     // $2
    ]

    // Second Query inserts the owner into the number of players ("users_parties" table) 
        pool.query(insertIntoParty, insertOwnerAndPartyId).then(result => {
            res.sendStatus(201)
        })
    }).catch(error => {
        console.error('Create Party Post Error', error);
        res.sendStatus(500);
    })
});

module.exports = router;