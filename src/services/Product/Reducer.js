import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
	product_page: [],
	product_page_filter: [],
	error: {
		getProduct: undefined,
		getProductNext: undefined,
		getProductFilter: undefined,
	},
	succes: {
		getProduct: undefined,
		getProductNext: undefined,
		getProductFilter: undefined,
	},
	loading: {
		getProduct: undefined,
		getProductNext: undefined,
		getProductFilter: undefined,
	},
	page: 1,
	next: true,
}

const reducer = handleActions(
	{
		PRODUCT: {
			GET_PRODUCT_PAGE: (state) => ({
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
			GET_PRODUCT_PAGE_NEXT: (state) => ({
				...state,
				loading: { ...state.loading, getProductNext: true },
				succes: { ...state.succes, getProductNext: false },
				error: { ...state.error, getProductNext: false },
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
				throw(state) {
					return {
						...state,
						error: { ...state.error, getProductNext: true },
						loading: { ...state.loading, getProductNext: false },
					}
				},
			},
			GET_PRODUCT_PAGE_FILTER: (state) => ({
				...state,
				loading: { ...state.loading, getProductFilter: true },
				succes: { ...state.succes, getProductFilter: false },
				error: { ...state.error, getProductFilter: false },
			}),

			GET_PRODUCT_PAGE_FILTER_RESPONSE: {
				next(state, { payload: { product_page_filter } }) {
					return {
						...state,
						succes: { ...state.succes, getProductFilter: true },
						loading: { ...state.loading, getProductFilter: false },
						product_page_filter,
						product_page: [],
						page: 1,
					}
				},
				throw(state, action) {
					return {
						...state,
						error: { ...state.error, getProductFilter: true },
						loading: { ...state.loading, getProductFilter: false },
					}
				},
			},
			GET_PRODUCT_PAGE_RESET: (state) => ({
				...state,
				loading: { ...state.loading, getProductFilter: true },
				succes: { ...state.succes, getProductFilter: false },
				error: { ...state.error, getProductFilter: false },
				product_page: [],
				product_page_filter: [],
			}),
		},
	},
	INITIAL_STATE
)

export default reducer
