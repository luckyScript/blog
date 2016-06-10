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
                    <h4><p>April 2016</p></h4>
                    <p>Study in Baidu</p>
                </li>
                <li className="list-group-item lifeLine">
                    <h4><p>May 2016</p></h4>
                    <p>Beijing,Xi'an</p>
                </li>
                <li className="list-group-item lifeLine">
                    <h4><p>June 2016</p></h4>
                    <p>In School</p>
                </li>
            </ul>
        )
    }
})
module.exports = LifeLineList;