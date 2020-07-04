const jwtDecode = require('jwt-decode');

export class Token {
	decode = token => {
		let tokenLocal = this.getKeepLoggedIn() ? localStorage.getItem('token') : sessionStorage.getItem('token');
		return jwtDecode(token || tokenLocal);
	};

	isTokenValid = () => {
		let token = this.getKeepLoggedIn() ? localStorage.getItem('token') : sessionStorage.getItem('token');
		try {
			return jwtDecode(token) !== undefined;
		} catch (e) {
			return false;
		}
	};

	getToken() {
		const token = this.getKeepLoggedIn() ? localStorage.getItem('token') : sessionStorage.getItem('token');
		return token;
	}

	setToken(token) {
		return this.getKeepLoggedIn() ? localStorage.setItem('token', token) : sessionStorage.setItem('token', token);
	}

	getKeepLoggedIn() {
		return localStorage.getItem('keepLoggedIn');
	}

	decodeTokenGod() {
		return jwtDecode(sessionStorage.getItem('tokenGod'));
	}

	isTokenGod() {
		return sessionStorage.getItem('tokenGod') !== undefined;
	}
}

export default new Token();