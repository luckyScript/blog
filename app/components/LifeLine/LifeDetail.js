var React = require('react');

var LifeDetail = React.createClass({
    render: function() {
        return (
            <div>
                <div className="time-block">
                    <div className="time-header">
                        <h2> April 2016 - Study in Baidu</h2>
                    </div>
                    <div className="time-body">
                        <img className="time-img" src="./assert/201604-1.jpg"/>
                        <img className="time-img" src="./assert/201604-2.jpg"/>
                        <img className="time-img" src="./assert/201604-3.jpg"/>
                    </div>
                    <div className="time-footer">
                        <i>description:</i> 
                        <br/>
                        <b><i>#1 #2</i>&nbsp;&nbsp;night scene in Xierqi</b>
                        <p>Out of Xierqi metro,moon,cloud,like a dragon.Cars across rapidly,wind cold.</p>
                        <b><i>#3</i>&nbsp;&nbsp;Study in Baidu</b>
                        <p>I joined in Baidu this month as an intern.</p>
                    </div>
                </div>
                <div className="time-block">
                    <div className="time-header">
                        <h2> May 2016 - Ordinary life as a intern</h2>
                    </div>
                    <div className="time-body">
                        <img className="time-img" src="./assert/201605-01.jpg"/>
                        <img className="time-img" src="./assert/201605-02.jpg"/>
                        <img className="time-img" src="./assert/201605-03.jpg"/>
                        <img className="time-img" src="./assert/201605-04.jpg"/>
                        <img className="time-img" src="./assert/201605-05.jpg"/>
                        <img className="time-img" src="./assert/201605-06.jpg"/>
                    </div>
                    <div className="time-footer">
                        <i>description:</i> 
                        <br/>
                        <b><i>#1 #2</i>&nbsp;&nbsp;Go to tian'anmen square</b>
                        <p>It's my first time to be there, not a little admire, but a bit thinking about our country.</p>
                        <b><i>#3 #4</i>&nbsp;&nbsp;In school</b>
                        <p>Back to school for an exam and take a rest.Life ouside is tired than in school.</p>
                        <b><i>#5 #6</i>&nbsp;&nbsp;HongLuo temple</b>
                        <p>air is fresh in mountain, our team manager organize us to climb mount HongLuo.It's awesome.</p>
                    </div>
                </div>
            </div>
        )
    }
})
module.exports = LifeDetail