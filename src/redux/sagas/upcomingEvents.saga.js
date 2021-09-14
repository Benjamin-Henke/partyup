import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* recentPostsSaga() {
    yield takeLatest('FETCH_UPCOMING_EVENTS', upcomingEvents);
    yield takeLatest('PARTY_INFO_TO_DASHBOARD', partyInfo)
}

function* partyInfo(action) {
    try {
        yield put ({
            type: "SET_PARTY_INFO",
            payload: action.payload
        })
    } catch (error) {
        console.error('Error placing party info in reducer', error);
    }
}

function* upcomingEvents() {
    try {
        const response = yield axios.get('/api/upcoming');
        yield put ({
            type: "SET_UPCOMING_EVENTS",
            payload: response.data
        })
    } catch (error) {
        console.error('Error posting New Party', error);
    }
}