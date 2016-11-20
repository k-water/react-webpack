import React from 'react';
import ReactDOM from 'react-dom';

export default class Comment extends React.Component {
    render() {
        <div className="comment">
            <h2 className="commentAuthor">
                {this.props.author}
            </h2>
            <span>{this.props.children}</span>
        </div>
    }
}
