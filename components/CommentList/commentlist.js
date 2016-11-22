Pimport React from 'react';
import ReactDOM from 'react-dom';
import Comment from '../Comment/comment';
export default class CommentList extends React.Component {
    render() {
        let commentNodes = this.props.data.map(comment=>{
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}
