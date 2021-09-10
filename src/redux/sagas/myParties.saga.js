import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* fetchMyParties() {
    yield takeLatest('FETCH_MY_PARTIES', fetchParties);
    yield takeLatest('DELETE_THIS_PARTY', deleteParty)
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
} // end fetchParties

function* deleteParty(action) {
    try {
        yield axios.delete(`/api/my_parties/${action.payload}`);
    } catch (error) {
        console.error('Error deleting party', error);
    }
}