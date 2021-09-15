const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET request to retrieve all created parties from the user
router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = `
        SELECT * FROM "parties"
        WHERE owner_id = $1
        ORDER BY "date_time" ASC
        `;

    const sqlParams = [req.user.id]

    pool.query(sqlText, sqlParams).then(result => {
        console.log('My Parties response', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.error('My Parties response error', error);
        res.sendStatus(500);
    })
});

// GET request to get a specific games current players
router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('Party id', req.params.id);
    
} )

// DELETE request to delete specific party on My Parties page
router.delete(`/:id`, rejectUnauthenticated, (req, res) => {
    const sqlParams = [req.params.id];
    const sqlText = `
        DELETE FROM "parties"
        WHERE id = $1;
        `;
    pool.query(sqlText, sqlParams).then(response => {
        console.log('DELETE successful', response);
        res.sendStatus(200);
    }).catch(error => {
        console.error('DELETE Error', error);
        res.sendStatus(500);
    })
})

// PUT requests to edit a specific party
router.put(`/:id`, (req, res) => {  
    console.log('ID', req.params.id);
    console.log('Party Info', req.body.board_game);
    
    
    const sqlText = `
        UPDATE "parties" 
        SET 
            "board_game" = $1, 
            "number_of_players" = $2, 
            "experience" = $3, 
            "location" = $4, 
            "date_time" = $5
        WHERE "id" = $6
        `;
    const sqlParams = [
        req.body.boardGame,          // $1
        req.body.numberOfPlayers,   // $2
        req.body.experience,          // $3
        req.body.location,            // $4
        req.body.dateTime,           // $5
        req.params.id,                // $6
    ];
    pool.query(sqlText, sqlParams).then(response => {
        console.log('PUT Successful', response);
        res.sendStatus(200);
    }).catch(error => {
        console.error('PUT Error', error);
        res.sendStatus(500);
    })
})

module.exports = router;