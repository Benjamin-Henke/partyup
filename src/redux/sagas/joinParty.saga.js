import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* joinPartySaga() {
    yield takeLatest('JOINING_A_PARTY', joinParty)
}

function* joinParty(action) {
    try {
        yield axios.post('/api/join_party', action.payload);
    } catch (error) {
        console.error('Error posting New Party', error);

    }
}