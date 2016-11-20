import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from '../CommentList/commentlist';
import CommentForm from '../CommentForm/commentform';
export default class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this)
  }
  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          data: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  }
  
  handleCommentSubmit(comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({
      data: newComments
    });
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({
          data: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({
          data: comments
        });
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}
ReactDOM.render(
	<CommentBox url="../api/comments.json" pollInterval={2000} />,
	document.getElementById('content')
);