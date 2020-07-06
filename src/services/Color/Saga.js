import { put, takeLatest, all } from 'redux-saga/effects';
import { colors } from './Actions';
import Api from '../../config/common/api';

function* getAll() {
	const response = yield Api.get('/colors');
	yield put(colors.getAllResponse(response));
}

function* ActionWatcher() {
	yield takeLatest(colors.getAll, getAll);
}

export default function* rootSaga() {
	yield all([ActionWatcher()]);
}
