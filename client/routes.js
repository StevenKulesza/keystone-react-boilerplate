// Packages
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Containers
import Home    from './containers/home';
import Testurl from './containers/testurl';

export default (
	<Router>
		<Route exact path="/" component={Home} />
		<Route path="/testurl" component={Testurl} />
	</Router>
);
