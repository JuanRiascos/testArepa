import { apiUrl } from '../config'

export class Api {
	post(url, data, header) {
		let dataBody = JSON.stringify(data)

		return fetch(`${apiUrl}${url}`, {
			method: 'POST',
			headers: header
				? header
				: {
						Accept: 'application/json',
						'Content-type': 'application/json',
				  },
			body: dataBody,
		})
			.then(async (res) => {
				const payload = await res.json()

				if (res.status === 401) {
					console.log('error')
					return res
				}
				return payload
			})
			.catch((err) => err)
	}

	put(url, data, header) {
		let isFormData = data instanceof FormData
		return fetch(`${apiUrl}${url}`, {
			method: 'PUT',
			headers: header
				? header
				: isFormData && {
						Accept: isFormData ? '' : 'application/json',
						'Content-type': isFormData ? '' : 'application/json',
				  },
			body: isFormData ? data : JSON.stringify(data),
		})
			.then(async (res) => {
				const payload = await res.json()

				if (res.status === 401) {
					console.log('error')
					return res
				}
				return payload
			})
			.catch((err) => err)
	}

	get(url, params, headers) {
		url = new URL(`${apiUrl}${url}`)
		if (params) Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]))
		return fetch(url, {
			method: 'GET',
		})
			.then(async (res) => {
				const payload = await res.json()

				if (res.status === 401) {
					console.log('error')
					return res
				}
				return payload
			})
			.catch((err) => err)
	}
}

export default new Api()
