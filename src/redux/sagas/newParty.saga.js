import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* newPartySaga() {
    yield takeLatest('NEW_PARTY_CREATED', createParty)
}

function* createParty(action) {
    try {
        let combineData;
        console.log('board game to retrieve from Board Game Atlas API', action.payload.boardGame);
        const response = yield axios.get('/api/board_game_atlas', { params: { boardGame: action.payload.boardGame }});
        console.log('action.payload', action.payload);
        console.log('Results from Board Game Atlas API:', response.data);
        console.log('Description', response.data[0].description);
        console.log('Images', response.data[0].images.medium);
        console.log('action.payload', action.payload);
        yield combineData = {
            userInputs: action.payload,
            description: response.data[0].description,
            image: response.data[0].images.medium
        }
        
        yield axios.post('/api/create_party', combineData);

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