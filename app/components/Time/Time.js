var React = require('react');
var Comment = require('../Comment/Comment');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Time= React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function() {
		return {
			comments:[]
		}
	},
	componentDidMount: function() {
        this.ref = new Firebase('https://luckyscript.firebaseio.com');
        var childRef = this.ref.child(window.location.hash.split("?")[0].split("#")[1]);
        this.bindAsArray(childRef, 'comments');
    },
	addComment: function(newNote) {
        this.ref.child(window.location.hash.split("?")[0].split("#")[1]).child(this.state.comments.length).set(newNote+" | "+(new Date().getMonth()+1)+"-"+new Date().getDate());
    },
	render: function() {
		return (
			<div>
				<div className="col-md-8">
				 	{this.props.children}
				</div>
				<div className="col-md-4">
					<Comment addComment={this.addComment} comments={this.state.comments} />
				</div>
			</div>
		);
	}
})

module.exports = Time;