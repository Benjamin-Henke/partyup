import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* newPartySaga() {
    yield takeLatest('NEW_PARTY_CREATED', createParty)
}

function* createParty(action) {
    try {
        yield axios.post('/api/create_party', action.payload);
    } catch (error) {
        console.error('Error posting New Party', error);    
    }
}



// req.body.combineData.userInputs.boardGame
// req.body.combineData.userInputs.date


// req.body.combineData.description


/*
     const response = yield axios.get('/api/board_game_atlas', { params: { boardGame } })
        console.log('Board Games from DB Search', response.data);

        let combineData = {
            userInputs = action.payload,
            description = response.games.description,
            image = response.games.url,
        }

        yield axios.post('/api/create_party', combineData)

*/