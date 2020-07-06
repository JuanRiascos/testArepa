import { put, takeLatest, all } from 'redux-saga/effects';
import { prices } from './Actions';
import Api from '../../config/common/api';

function* get() {
	const response = yield Api.get('/prices');
	yield put(prices.getResponse(response));
}

function* ActionWatcher() {
	yield takeLatest(prices.get, get);
}

export default function* rootSaga() {
	yield all([ActionWatcher()]);
}
