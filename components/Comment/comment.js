import React from 'react';
import ReactDOM from 'react-dom';

export default class Comment extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span>{this.props.children}</span>
            </div>
        )
    }
}
