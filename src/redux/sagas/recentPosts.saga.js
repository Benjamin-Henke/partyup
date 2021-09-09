import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* recentPostsSaga() {
    yield takeLatest('FETCH_RECENT_PARTIES', recentPosts)
}

function* recentPosts() {
    try {
        yield axios.get('/api/create_party');
    } catch (error) {
        console.error('Error posting New Party', error);

    }
}