import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
	colors: [],
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
		COLORS: {
			GET_ALL: (state, { payload = {} }) => ({
				...state,
				loading: { ...state.loading, get: true },
				error: { ...state.error, get: false },
				succes: { ...state.succes, get: false },
			}),
			GET_ALL_RESPONSE: {
				next(state, { payload: { colors } }) {
					return {
						...state,
						succes: { ...state.succes, get: true },
						loading: { ...state.loading, get: false },
						colors,
					}
				},
				throw(state, { error, payload: { message } }) {
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
