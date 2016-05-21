var React = require('react');
var LifeLineList = require('./LifeLineList');

var LifeLine = React.createClass({
    render: function() {
        return (
            <div>
                <h3>LifeLine of Luckyscript</h3>
                <LifeLineList />
            </div>
        )
    }
})
module.exports = LifeLine;

