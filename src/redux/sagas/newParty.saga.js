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