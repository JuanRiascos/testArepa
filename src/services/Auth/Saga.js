import { put, takeLatest, all } from 'redux-saga/effects';
import Api from '../../config/common/api';
import { auth } from './Actions';

function* login({ payload: { userName, password } }) {
	const response = yield Api.post('/v1/auth/', { userName, password });
	if (response.success) {
		localStorage.setItem('token', response.payload);
		yield put(auth.loginResponse(response.payload));
	} else {
		const err = new TypeError(response.error);
		yield put(auth.loginResponse(err));
	}
}

function logout() {
	localStorage.removeItem('token');
}

function* ActionWatcher() {
	yield takeLatest(auth.login, login);
	yield takeLatest(auth.logout, logout);
}

export default function* rootSaga() {
	yield all([ActionWatcher()]);
}
