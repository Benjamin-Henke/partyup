import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* searchSaga() {
    yield takeLatest('SEARCH_FOR_BOARD_GAME', searchBoardGame)
}

function* searchBoardGame(action) {
    try {
        const response = yield axios.get('/api/search_game', { params: { boardGame: action.payload }})       
        console.log('Board Games from DB Search', response.data);
        yield put({
            type: 'SET_SEARCHED_BOARD_GAME',
            payload: response.data
        })
        
    } catch (error) {
        console.error('Error searching for board game', error);

    }
}