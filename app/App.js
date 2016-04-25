var React = require('react');

var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routers');

ReactDOM.render(
    <Router>{routes}</Router>,
    document.querySelector('#app')

)
