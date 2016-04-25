var React = require('react');
var CommentList = require('./CommentList');
var AddComment = require('./AddComment');

var Comment = React.createClass({
	propTypes: {
		comments: React.PropTypes.array.isRequired,
		addComment: React.PropTypes.func.isRequired
	},
	render: function() {
		return (
			<div>
				<h3>leave your Comment</h3>
				<AddComment addComment={this.props.addComment} />
				<CommentList comment={this.props.comments}/>
			</div>
		)
	}
})
module.exports = Comment