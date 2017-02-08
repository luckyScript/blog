var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var LifeDetail = require('../components/LifeLine/LifeDetail');
var LifeDetail17 = require('../components/LifeLine/LifeDetail17');
var Github = require('../components/Github/Github')
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
    <Route path="/" component={Main}>   
        <Route path = "timeline2016" component = {LifeDetail} >
        </Route>
        <Route path = "timeline2017" component = {LifeDetail17} >
        </Route>
        <Route path="github" component={Github} />
        
        <IndexRoute component = {Home} /> 
    </Route>
);
