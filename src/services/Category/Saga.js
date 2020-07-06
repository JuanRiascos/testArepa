import { put, takeLatest, all } from 'redux-saga/effects';
import { categorys } from './Actions';
import Api from '../../config/common/api';

function* getAll() {
	const response = yield Api.get('/category');
	yield put(categorys.getAllResponse(response));
}

function* ActionWatcher() {
	yield takeLatest(categorys.getAll, getAll);
}

export default function* rootSaga() {
	yield all([ActionWatcher()]);
}
