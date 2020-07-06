import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
	categorys: [],
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
		CATEGORYS: {
			GET_ALL: (state, { payload = {} }) => ({
				...state,
				loading: { ...state.loading, get: true },
				error: { ...state.error, get: false },
				succes: { ...state.succes, get: false },
			}),
			GET_ALL_RESPONSE: {
				next(state, { payload: { categorys } }) {
					return {
						...state,
						succes: { ...state.succes, get: true },
						loading: { ...state.loading, get: false },
						categorys,
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
