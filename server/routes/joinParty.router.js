const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// POST users inputs to the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('User id', req.user.id);
    console.log('Party id', req.body.partyId);

    let sqlText, sqlParams;

    // Double check to see if the logged in user is already apart of the game
    if (req.user.id === `users_id`) {
        alert('You are already apart of this party.');
        return;
    } else {
        sqlText = `
        INSERT INTO "my_parties" ("users_id", "parties_id")
        VALUES ($1, $2);
        `;

        sqlParams = [
            req.user.id,
            req.body.partyId
        ]
    }
    
    pool.query(sqlText, sqlParams).then(response => {
        console.log('Join Party POST working', response);
        res.sendStatus(201)
    }).catch(error => {
        console.error('Join Party Post Error', error);
        res.sendStatus(500);
    })
});

module.exports = router;