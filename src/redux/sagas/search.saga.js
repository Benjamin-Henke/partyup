import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* searchSaga() {
    yield takeLatest('SEARCH_FOR_BOARD_GAME', createParty)
}

function* createParty() {
    try {
        
    } catch (error) {
        console.error('Error posting New Party', error);

    }
}