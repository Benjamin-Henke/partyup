const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM "parties"`;
    pool.query(sqlText).then(result => {
        console.log('My Parties response', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.error('My Parties response error', error);
        res.sendStatus(500);
    })
});

module.exports = router;