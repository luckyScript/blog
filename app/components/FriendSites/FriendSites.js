var React = require('react');
var FriendSites= React.createClass({
	render: function() {
		return (
			<ul className="list-group">
				<a href="http://yooooh.net/" target="_blank">
					<li className="list-group-item">
						<h4><p>Mr.Thunder</p></h4>
					</li>
				</a>
			</ul>
		);
	}
})

module.exports = FriendSites;