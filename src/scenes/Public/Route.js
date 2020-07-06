import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './Home/Home'

class Public extends React.Component {
	render() {
		return (
			<Router>
				<Switch className='h-100'>
					<Route exact path='/' component={Home} />
					<Route path='/home' component={Home} />
				</Switch>
			</Router>
		)
	}
}

export default Public
