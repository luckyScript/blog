var React = require('react');
var Router = require('react-router');

var LifeLineList = React.createClass({
	mixins: [Router.History],
	getRef: function(ref) {
		this.url = ref;
	},
	handleClick: function() {
		this.history.pushState(null,"time/" + this.url.getElementsByTagName('input')[0].value);
	},
	render: function() {
		return (
			<ul className="list-group">
				<li className="list-group-item lifeLine" onClick={this.handleClick} ref={this.getRef}>
					<input type="hidden" value="201604"/>
					<h4><p>April 2016</p></h4>
					<p>Study in Baidu</p>
				</li>
				<li className="list-group-item lifeLine" onClick={this.handleClick} ref={this.getRef}>
					<input type="hidden" value="201605"/>
					<h4><p>May 2016</p></h4>
					<p>Beijing,Xi an</p>
				</li>
			</ul>
		)
	}
})
module.exports = LifeLineList;