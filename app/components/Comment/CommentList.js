var React = require('react');

var CommentList = React.createClass({
	render: function() {
		var comment = this.props.comment.sort(function(a,b) {
			return b['.key'] - a['.key'];
		}).map(function(note,index) {
			return (
				<li className="list-group-item" key={index}>{note['.value']}</li>
			)
		})
		return (
			<ul className="list-group">{comment}</ul>
		);
	}
})
module.exports = CommentList;