import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* searchSaga() {
    yield takeLatest('SEARCH_FOR_BOARD_GAME', searchBoardGame)
}

function* searchBoardGame() {
    try {
        const response = yield axios.get('/api/search_game');
        console.log('Board Games from DB Search', response);
        
    } catch (error) {
        console.error('Error posting New Party', error);

    }
}