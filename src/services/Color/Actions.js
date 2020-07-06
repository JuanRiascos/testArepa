import { createActions } from 'redux-actions'

export const { colors } = createActions({
	COLORS: {
		GET_ALL: () => ({}),
		GET_ALL_RESPONSE: (colors) => ({ colors }),
	},
})
