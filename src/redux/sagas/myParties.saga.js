import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* fetchMyParties() {
    yield takeLatest('FETCH_MY_PARTIES', fetchParties)
}

function* fetchParties() {
    try {
        const response = yield axios.get('/api/my_parties');
        yield put({
            type: 'SET_MY_PARTIES',
            payload: response.data
        })
    } catch (error) {
        console.error('Error posting New Party', error);

    }
}