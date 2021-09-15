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
    
    const sqlText = `
        INSERT INTO "my_parties" ("users_id", "parties_id")
        VALUES ($1, $2);
        `;

    const sqlParams = [
       req.user.id,
       req.body.partyId
    ]

    pool.query(sqlText, sqlParams).then(response => {
        console.log('Join Party POST working', response);
        res.sendStatus(201)
    }).catch(error => {
        console.error('Join Party Post Error', error);
        res.sendStatus(500);
    })
});

module.exports = router;