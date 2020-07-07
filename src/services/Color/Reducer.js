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
			GET_ALL: (state) => ({
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
				throw(state, { payload: { message } }) {
					return {
						...state,
						error: { ...state.error, get: message },
						loading: { ...state.loading, get: false },
					}
				},
			},
			PUT_SELECT: (state, { payload: { selectColor } }) => ({
				...state,
				colors: state.colors.map((color, index) => ({
					...color,
					isSelected: index === selectColor,
				})),
			}),
			PUT_SELECT_COLOR_RESET: (state) => ({
				...state,
				colors: state.colors.map((color) => ({
					...color,
					isSelected: false,
				})),
			}),
		},
	},
	INITIAL_STATE
)

export default reducer
