import { createActions } from 'redux-actions'

export const { prices } = createActions({
	PRICES: {
		GET: () => ({}),
		GET_RESPONSE: (prices) => ({ prices }),
	},
})
