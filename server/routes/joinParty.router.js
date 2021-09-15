const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// POST user into my_parties table to join a party
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('User id', req.user.id);
    console.log('Party id', req.body.partyId);

    let sqlText, sqlParams;

    // Double check to see if the logged in user is already apart of the game
    // I know the if statement is not valid since it isn't checking SQL
    if (req.user.id === party.users_id) {
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