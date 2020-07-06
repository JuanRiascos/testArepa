import { createActions } from 'redux-actions'

export const { product } = createActions({
	PRODUCT: {
		GET_PRODUCT_PAGE: (params) => ({ params }),
		GET_PRODUCT_PAGE_RESPONSE: (product_page, next) => ({ product_page, next }),

		GET_PRODUCT_PAGE_NEXT: (params, previous_clients_page) => ({ params, previous_clients_page }),
		GET_PRODUCT_PAGE_NEXT_RESPONSE: (product_page_news, next) => ({ product_page_news, next }),
	},
})
