import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
	product_page: [],
	error: {
		getProduct: undefined,
		getProductNext: undefined,
	},
	succes: {
		getProduct: undefined,
		getProductNext: undefined,
	},
	loading: {
		getProduct: undefined,
		getProductNext: undefined,
	},
	page: 1,
	next: true,
}

const reducer = handleActions(
	{
		PRODUCT: {
			GET_PRODUCT_PAGE: (state, { payload = {} }) => ({
				...state,
				loading: { ...state.loading, getProduct: true },
				product_page: [],
				succes: { ...state.succes, getProduct: false },
				error: { ...state.error, getProduct: false },
				page: 1,
			}),
			GET_PRODUCT_PAGE_RESPONSE: {
				next(state, { payload: { product_page, next } }) {
					return {
						...state,
						succes: { ...state.succes, getProduct: true },
						loading: { ...state.loading, getProduct: false },
						product_page,
						next,
					}
				},
				throw(state, { payload: { message } }) {
					return {
						...state,
						error: { ...state.error, getProduct: message },
						loading: { ...state.loading, getProduct: false },
					}
				},
			},
			GET_PRODUCT_PAGE_NEXT: (state, { payload = {} }) => ({
				...state,
				loading: { ...state.loading, getProductNext: true },
				succes: { ...state.succes, get: false },
				error: { ...state.error, getProduct: false },
			}),

			GET_PRODUCT_PAGE_NEXT_RESPONSE: {
				next(state, { payload: { product_page_news, next } }) {
					return {
						...state,
						succes: { ...state.succes, getProductNext: true },
						loading: { ...state.loading, getProductNext: false },
						product_page: product_page_news,
						page: state.page + 1,
						next,
					}
				},
				throw(state, action) {
					return {
						...state,
						error: { ...state.error, getProductNext: true },
						loading: { ...state.loading, getProductNext: false },
					}
				},
			},
		},
	},
	INITIAL_STATE
)

export default reducer
