var React = require('react');

var LifeDetail17 = React.createClass({
    render: function() {
        return (
            <div>
                <div className="time-block">
                    <div className="time-header">
                        <h2> Jan 2016 - Feb 2016</h2>
                    </div>
                    <div className="time-body">
                        <img className="time-img" src="./assert/201701-01.png"/>
                        <img className="time-img" src="./assert/201701-02.jpg"/>
                        <img className="time-img" src="./assert/201701-03.jpg"/>
                    </div>
                    <div className="time-footer">
                        <i>description:</i>
                        <br/>
                        <b><i>#1</i>&nbsp;&nbsp;Music makes me happy and help me calm down</b>
                        <p>Last year I have listened over 2000 songs</p>
                        <b><i>#2</i>&nbsp;&nbsp;Taking exercise in gym nearby.</b>
                        <p>I want to have six Abdominal muscles,hahaha.</p>
                        <b><i>#3</i>&nbsp;&nbsp;A comic named guilty grown. </b>
                        <p>I like it very much.23333</p>
                    </div>
                </div>
            </div>
        )
    }
})
module.exports = LifeDetail17
