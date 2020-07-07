import { put, takeLatest, all } from 'redux-saga/effects'
import { categories } from './Actions'
import Api from '../../config/common/api'

function* getAll() {
	let response = yield Api.get('/category')
	response.map((item) => ({ ...item, isSelected: false }))
	yield put(categories.getAllResponse(response))
}

function* ActionWatcher() {
	yield takeLatest(categories.getAll, getAll)
}

export default function* rootSaga() {
	yield all([ActionWatcher()])
}
