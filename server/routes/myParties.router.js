const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET request to retrieve all created parties from the user
router.get('/', (req, res) => {
    let sqlText, sqlParams;

    if (req.user.authLevel === 'ADMIN') {
        queryText = `SELECT * FROM "pet"`;
        queryParams = [];
    }
    else {
        // Regular users see only their pets
        sqlText = `
        SELECT * FROM "parties"
        WHERE user_id = $1
        `;
        sqlParams = [req.user.id]
    }

    pool.query(sqlText, sqlParams).then(result => {
        console.log('My Parties response', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.error('My Parties response error', error);
        res.sendStatus(500);
    })
});

// DELETE request to delete specific party on My Parties page
router.delete(`/:id`, (req, res) => {
    const sqlParams = [req.params.id];
    const sqlText = `DELETE from "parties" WHERE id = $1;`;
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
    const sqlText = `
        UPDATE "parties" 
        SET 
            "board_game" = $2, 
            "number_of_players" = $3, 
            "experience" = $4, 
            "location" = $5, 
            "date_time" = $6
        WHERE "id" = $1
        `;
    const sqlParams = [
        req.params.id,                // $1
        req.body.board_game,          // $2
        req.body.number_of_players,   // $3
        req.body.experience,          // $4
        req.body.location,            // $5
        req.body.date_time,           // $6
    ];
    pool.query(sqlText, sqlParams).then(dbRes => {
        res.sendStatus(200);
    }).catch(error => {
        console.error('PUT Error', error);
        res.sendStatus(500);
    })
})

module.exports = router;