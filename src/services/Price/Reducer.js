import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
	prices: [],
	error: {
		get: undefined,
	},
	succes: {
		get: undefined,
	},
	loading: {
		get: undefined,
	},
}

const reducer = handleActions(
	{
		PRICES: {
			GET: (state) => ({
				...state,
				loading: { ...state.loading, get: true },
				error: { ...state.error, get: false },
				succes: { ...state.succes, get: false },
			}),
			GET_RESPONSE: {
				next(state, { payload: { prices } }) {
					return {
						...state,
						succes: { ...state.succes, get: true },
						loading: { ...state.loading, get: false },
						prices,
					}
				},
				throw(state, { payload: { message } }) {
					return {
						...state,
						error: { ...state.error, get: message },
						loading: { ...state.loading, get: false },
					}
				},
			},
		},
	},
	INITIAL_STATE
)

export default reducer
