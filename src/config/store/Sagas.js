import { fork, all } from 'redux-saga/effects'

import ProductSaga from '../../services/Product/Saga'
import CategorySaga from '../../services/Category/Saga'
import ColorSaga from '../../services/Color/Saga'
import PriceSaga from '../../services/Price/Saga'

export default function* rootSaga() {
	yield all([fork(ProductSaga), fork(CategorySaga), fork(ColorSaga), fork(PriceSaga)])
}
