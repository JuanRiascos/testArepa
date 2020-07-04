import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Auth } from './Auth/Auth'

class Public extends React.Component {
	render() {
		return (
			<Router>
				<Switch className='h-100'>
					<Route exact path='/' component={Auth}/>
					<Route path='/auth' component={Auth} />
				</Switch>
			</Router>
		)
	}
}

export default Public
