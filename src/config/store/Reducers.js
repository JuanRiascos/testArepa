import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { auth } from '../../services/Auth/Actions';

import reduceAuth from '../../services/Auth/Reducer';



const appReducer = history =>
	combineReducers({
		router: connectRouter(history),
		auth: reduceAuth,
	});

const rootReducer = history => {
	return (state, action) => {
		if (action.type === auth.logout) state = undefined;
		return appReducer(history)(state, action);
	};
};

export default rootReducer;
