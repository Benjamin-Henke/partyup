const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// DELETE a specific player from a party when the players button is pressed on modal
router.delete(`/:id`, rejectUnauthenticated, (req, res) => {
    const sqlParams = [req.params.id];
    const sqlText = `
        DELETE FROM "users_parties"
        WHERE users_id = $1;
    `;
    pool.query(sqlText, sqlParams).then(response => {
        console.log('DELETE player successful', response);
        res.sendStatus(200);
    }).catch(error => {
        console.error('DELETE player error');
        res.sendStatus(500);
    })
});



module.exports = router;