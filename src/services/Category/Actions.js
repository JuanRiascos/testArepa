import { createActions } from 'redux-actions'

export const { categories } = createActions({
	CATEGORIES: {
		GET_ALL: () => ({}),
		GET_ALL_RESPONSE: (categories) => ({ categories }),

		PUT_SELECT:(selectCategory)=>({selectCategory}),

		PUT_SELECT_RESET:()=>({})
		

	},
})
