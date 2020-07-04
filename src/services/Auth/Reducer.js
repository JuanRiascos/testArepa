import { handleActions } from 'redux-actions';
import Token from '../../config/common/token';

export const INITIAL_STATE = {
	authentication: Token.isTokenValid(),
	loading: false,
	error: false
};

const reducer = handleActions({
	AUTH: {
		LOGIN: (state, { payload= {} }) => ({ ...state, loading: true, error: false }),
		LOGIN_RESPONSE: {
			next(state, { payload: { token } }) {
				return { ...state, token, authentication: true };
			},
			throw(state, { error, payload: { message } }) {
				return { ...state, error, message };
			}
		},

		LOGOUT: (state, { payload= {} }) => ({ ...state, authentication: false })
	},
},
INITIAL_STATE
);

export default reducer;
