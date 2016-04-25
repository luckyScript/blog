var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Time = require('../components/Time/Time');
var April2016 = require('../components/Time/April2016');
var Github = require('../components/Github/Github')
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
    <Route path = "/" component = {Main}>
    	<Route path = "time" component = {Time} >
    		<Route path = "201604" component = {April2016} />
    	</Route>
    	<Route path = "github" component = {Github} />
        <IndexRoute component = {Home} />
    </Route>
);
