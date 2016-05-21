var React = require('react');
var Profile = require('./Profile');
var SubSites = require('./SubSites/SubSites');
var FriendSites = require('./FriendSites/FriendSites');
var LifeLine = require('./LifeLine/LifeLine');
var Comment = require('./Comment/Comment');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Home = React.createClass({
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
            <div className="row">         
                <div className="col-md-8">
                    <Profile ></Profile>
                    <div className="col-md-6">
                        <h3>SubSites of luckyscript: </h3>
                        <SubSites></SubSites>
                        <LifeLine></LifeLine>
                        <h3>Sites:</h3>
                        <FriendSites></FriendSites>
                    </div>
                </div>
                <div className="col-md-4">
                    <Comment addComment={this.addComment} comments={this.state.comments} />
                </div>
            </div>
        );
    }
})

module.exports = Home;