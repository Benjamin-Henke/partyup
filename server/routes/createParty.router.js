const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// POST users inputs to the database
router.post('/', rejectUnauthenticated,(req, res) => {
    console.log('Info to insert into DB', req.body);
    

    const sqlText = `
        INSERT INTO "parties" ("board_game", "number_of_players", "experience", "location", "date_time", "image", "description", "owner_id")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING "id";
        `;

    const sqlParams = [
        req.body.userInputs.boardGame,          // $1
        req.body.userInputs.numberOfPlayers,    // $2
        req.body.userInputs.experience,         // $3
        req.body.userInputs.location,           // $4
        req.body.userInputs.dateTime,           // $5
        req.body.image,                         // $6
        req.body.description,                   // $7
        req.user.id,                            // $8
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