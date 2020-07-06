import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import reduceProduct from '../../services/Product/Reducer'
import reduceCategory from '../../services/Category/Reducer'
import reduceColor from '../../services/Color/Reducer'
import reducePrice from '../../services/Price/Reducer'

const appReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		product: reduceProduct,
		category: reduceCategory,
		colors: reduceColor,
		prices: reducePrice,
	})

const rootReducer = (history) => {
	return (state, action) => {
		return appReducer(history)(state, action)
	}
}

export default rootReducer
