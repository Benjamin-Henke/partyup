// MAYBE TO DO LATER

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
import axios from 'axios';

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/api/board_game_atlas', rejectUnauthenticated, (req, res)=> {
    axios({
        method: 'GET',
        url: `https://api.boardgameatlas.com/api/search?`,
        params: {
            name: req.query.boardGame,
            client_id: process.env.REACT_APP_BOARD_GAME_TOKEN,
        }
    }).then(response => {
        console.log('axios response', response.data);
        res.send(response.data.data)
    }).catch(error => {
        console.log('board game atlas error', error,response.data);
        res.sendStatus(500)
    })
});





module.exports = router;


// app.get(‘/gifs’, (req, res) => {
//     // Go to GIPHY, and get some trending gifs
//     axios({
//         method: ‘GET’,
//         url: ‘https://api.giphy.com/v1/gifs/trending’,
//         params: {
//             // Can we gitignore this one thing?
//             api_key: process.env.GIPHY_API_KEY,
//             rating: ‘pg-13’
//         }
//     }).then(response => {
//         console.log(‘axios response’, response.data);
//         res.send(response.data.data);
//     }).catch(err => {
//         console.log(‘giphy error’, err.response.data);
//         res.sendStatus(500);
//     })
// });