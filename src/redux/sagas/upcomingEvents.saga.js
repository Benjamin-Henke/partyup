import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* recentPostsSaga() {
    yield takeLatest('FETCH_UPCOMING_EVENTS', upcomingEvents);
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