var React = require('react');
var Router = require('react-router');

var LifeLineList = React.createClass({
    mixins: [Router.History],
    handleClick: function() {
        console.log(this.url);
        this.history.pushState(null,"timeline");
    },
    render: function() {
        return (
            <ul className="list-group" onClick={this.handleClick}>
                <li className="list-group-item lifeLine">
                    <h4><p>Latest: July 2016</p></h4>
                    <p>Life in Xi‘an,Yancheng and Beijing.</p>
                </li>
            </ul>
        )
    }
})
module.exports = LifeLineList;
