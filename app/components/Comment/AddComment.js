var React = require('react');

var AddComment = React.createClass({
    setRef: function(ref) {
        this.note = ref;
    },
    handleSubmit: function() {
        var newNote = this.note.value;
        this.note.value = '';
        this.props.addComment(newNote);
    },
    render: function() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="add new note" ref = {this.setRef} />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit}>
                        Submit new Notes
                    </button>
                </span>
            </div>
        );
    }
});
module.exports = AddComment;