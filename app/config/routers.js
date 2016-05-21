var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var LifeDetail = require('../components/LifeLine/LifeDetail');
var Github = require('../components/Github/Github')
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
    <Route path = "/" component = {Main}>
        <Route path = "timeline" component = {LifeDetail} >
        </Route>
        <Route path = "github" component = {Github} />
        <IndexRoute component = {Home} />
    </Route>
);
