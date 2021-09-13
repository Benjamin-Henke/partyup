import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* recentPostsSaga() {
    yield takeLatest('FETCH_UPCOMING_EVENTS', upcomingEvents)
}

function* upcomingEvents() {
    try {
        yield axios.get('/api/recent_posts');
    } catch (error) {
        console.error('Error posting New Party', error);
    }
}