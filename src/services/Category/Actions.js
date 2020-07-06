import { createActions } from 'redux-actions'

export const { categorys } = createActions({
	CATEGORYS: {
		GET_ALL: () => ({}),
		GET_ALL_RESPONSE: (categorys) => ({ categorys }),
	},
})
