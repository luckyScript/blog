var React = require('react');
var Router = require('react-router');

var LifeLineList = React.createClass({
    mixins: [Router.History],
    
    handleClick: function (event) {
        var time = event.currentTarget.querySelector("h4").querySelector("p").innerHTML;
        //var time = this.node.querySelector("h4").querySelector("p").innerHTML;
        this.history.pushState(null,"timeline"+time);
    },
    render: function() {
        return (
            <ul className="list-group">
                <li className="list-group-item lifeLine" onClick={this.handleClick}>
                    <h4><p>2016</p></h4>
                    <p>Life in Xi‘an,Yancheng and Beijing.</p>
                </li>
                <li className="list-group-item lifeLine" onClick={this.handleClick}>
                    <h4><p>2017</p></h4>
                    <p>I will graduate</p>
                </li>
            </ul>
        )
    }
})
module.exports = LifeLineList;
