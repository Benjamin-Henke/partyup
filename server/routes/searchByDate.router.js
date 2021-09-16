const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET request to retrieve all created parties from the user
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('Board Game to search:', req.query.date);

    const sqlText = `
        SELECT * FROM "parties"
        WHERE date_time::date = $1;
    `;
    const sqlParams = [req.query.date];

    pool.query(sqlText, sqlParams).then(result => {
        console.log('Search by date response', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.error('Search by date response error', error);
        res.sendStatus(500);
    })
});

module.exports = router;