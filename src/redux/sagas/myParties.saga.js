import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* fetchMyParties() {
    yield takeLatest('FETCH_MY_PARTIES', fetchParties)
}

function* fetchParties(action) {
    try {
        
    } catch (error) {
        console.error('Error posting New Party', error);

    }
}