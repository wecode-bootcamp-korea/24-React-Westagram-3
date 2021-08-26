import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="comments">
          <ul>
            {this.props.commentList.map((comments, id) => {
              return (
                <li key={id}>
                  {' '}
                  {this.props.userID} : {comments}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="comment">
          <input
            className="comment-box"
            type="text"
            placeholder="댓글달기..."
            onChange={this.props.handleCommentInput}
            value={this.props.comment}
          />
          <button
            type="submit"
            className="submit-comment"
            type="text"
            onClick={this.props.addCommentBtn}
          >
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
