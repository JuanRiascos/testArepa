import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import * as serviceWorker from './serviceWorker';

import { App } from './config/App';
import initStore from './config/store/Index';
import './assets/sass/main.scss';

const history = createBrowserHistory();
export const store = initStore(history);


ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App history={history} />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
