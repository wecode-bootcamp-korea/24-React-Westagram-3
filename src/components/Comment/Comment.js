import React from 'react';

class Comment extends React.Component {
  render() {
    const { user, comment } = this.props;
    return (
      <div className="comment">
        <span className="commentId">{user}</span>
        <span className="commentContent">{comment}</span>
        <button className="likeBtn">
          <i className="far fa-heart"></i>
        </button>
      </div>
    );
  }
}

export default Comment;
