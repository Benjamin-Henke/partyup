
const axios = require('axios');

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res)=> {
    console.log('Board game to search', req.query.boardGame);
    
    axios({
        method: 'GET',
        url: `https://api.boardgameatlas.com/api/search?name=${req.query.boardGame}&client_id=${process.env.REACT_APP_BOARD_GAME_TOKEN}`,
        // params: {
        //     name: req.query.boardGame,
        //     client_id: process.env.REACT_APP_BOARD_GAME_TOKEN,
        // }
    }).then(response => {
        console.log('axios response', response.data);
        res.send(response.data.data)
    }).catch(error => {
        console.log('board game atlas error', error,response.data);
        res.sendStatus(500)
    })
});

module.exports = router;