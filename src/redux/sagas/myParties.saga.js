import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* fetchMyParties() {
    yield takeLatest('DELETE_THIS_PARTY', deleteParty);
    yield takeLatest('EDIT_THIS_PARTY', editParty);
    yield takeLatest('FETCH_MY_PARTIES', fetchParties);
}

function* deleteParty(action) {
    try {
        yield axios.delete(`/api/my_parties/${action.payload}`);
    } catch (error) {
        console.error('Error deleting party', error);
    }
} // end deleteParty

function* editParty(action) {
    try {
        yield axios.put(`/api/my_parties/${action.payload.id}`, action.payload);
    } catch (error) {
        console.error('Error editing party', error);
    }
} // end editParty

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