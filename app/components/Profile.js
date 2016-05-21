var React = require('react');

var Profile = React.createClass({
    render: function() {
        return (
            <div className="col-md-6">
                <ul className="list-group">
                    <li className="list-group-item"><img src="https://avatars0.githubusercontent.com/u/9391201" className="avatar"/></li>
                    <li className="list-group-item">Name: Luckyscript</li>
                    <li className="list-group-item">Email: jsjhlk@gmail.com</li>
                    <li className="list-group-item">Location: Beijing</li>
                    <li className="list-group-item">School: Xidian university</li>
                    <li className="list-group-item">Blog: <a href="https://github.com/luckyScript/luckyscript.github.io/issues">Tech blog</a></li>
                    <li className="list-group-item">Weibo: <a href="http://weibo.com/jsjhlk" target="_blank">luckyscript</a></li>
                </ul>
            </div>
        )
    }
})
module.exports = Profile;

