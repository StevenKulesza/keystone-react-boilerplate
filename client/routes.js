// Packages
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Containers
import Home from './containers/home';

export default (
	<Router>
		<Route exact path="/" component={Home} />
	</Router>
);
