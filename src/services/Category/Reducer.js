import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
	categories: [],
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
		CATEGORIES: {
			GET_ALL: (state) => ({
				...state,
				loading: { ...state.loading, get: true },
				error: { ...state.error, get: false },
				succes: { ...state.succes, get: false },
			}),
			GET_ALL_RESPONSE: {
				next(state, { payload: { categories } }) {
					return {
						...state,
						succes: { ...state.succes, get: true },
						loading: { ...state.loading, get: false },
						categories,
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
			PUT_SELECT: (state, { payload: { selectCategory } }) => ({
				...state,
				categories: state.categories.map((category, index) => ({
					...category,
					isSelected: index === selectCategory,
				})),
			}),
			PUT_SELECT_RESET: (state) => ({
				...state,
				categories: state.categories.map((category, index) => ({
					...category,
					isSelected: false,
				})),
			}),
		},
	},
	INITIAL_STATE
)

export default reducer
