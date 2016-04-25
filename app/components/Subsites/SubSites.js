var React = require('react');
var SubSites= React.createClass({
	render: function() {
		return (
			<ul className="list-group">
				<a href="http://www.luckyscript.me/yuppie">
					<li className="list-group-item">
						<h4><p>For yuppie</p></h4>
					</li>
				</a>
				<a href="http://www.luckyscript.me/resume">
					<li className="list-group-item">
						<h4><p>My resume online</p></h4>
					</li>
				</a>
			</ul>
		);
	}
})

module.exports = SubSites;