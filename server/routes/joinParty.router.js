const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// POST users inputs to the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('User', req.user.id);
    console.log('Passed Info', req.body);
    
    
    
    // const sqlText = `
    //     `;

    // const sqlParams = [
       
    // ]

    // pool.query(sqlText, sqlParams).then(response => {
    //     console.log('Join Party POST working', response);
    //     res.sendStatus(201)
    // }).catch(error => {
    //     console.error('Join Party Post Error', error);
    //     res.sendStatus(500);
    // })
});

module.exports = router;