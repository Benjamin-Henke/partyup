const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
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

module.exports = router;