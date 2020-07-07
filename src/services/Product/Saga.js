import { put, takeLatest, all } from 'redux-saga/effects'
import Api from '../../config/common/api'
import { product as productActions } from './Actions'

function* getProductPage({ payload }) {
	const { params } = payload

	const response = yield Api.get('/product', params)

	if (response) {
		yield put(productActions.getProductPageResponse(response, true))
	} else {
		const err = new TypeError('ERROR_GET_PRODUCT_PAGE')
		yield put(productActions.getProductPageResponse(err))
	}
}

function* getProductPageNext({ payload }) {
	const { params, previous_clients_page } = payload
	const response = yield Api.get('/product', params)

	if (response) {
		yield put(
			productActions.getProductPageNextResponse(previous_clients_page.concat(response), response.length > 0)
		)
	} else {
		const err = new TypeError('ERROR_GET_PRODUCT_NEXT_PAGE')
		yield put(productActions.getProductPageNextResponse(err))
	}
}

function* getProductPageFilter({ payload }) {
	const { params } = payload
	const response = yield Api.get('/product', params)

	if (response) {
		yield put(productActions.getProductPageFilterResponse(response, true))
	} else {
		const err = new TypeError('ERROR_GET_FILTER')
		yield put(productActions.getProductFilterPageResponse(err))
	}
}


function* ActionWatcher() {
	yield takeLatest(productActions.getProductPage, getProductPage)
	yield takeLatest(productActions.getProductPageNext, getProductPageNext)
	yield takeLatest(productActions.getProductPageFilter, getProductPageFilter)
}

export default function* rootSaga() {
	yield all([ActionWatcher()])
}
