import React from 'react';

class Comment extends React.Component {
  render() {
    const { key, user, data } = this.props;
    return (
      <div className="comment">
        <span className="commentId" id={key}>
          {user}
        </span>
        <span className="commentContent">{data}</span>
        <button className="likeBtn">
          <i className="far fa-heart"></i>
        </button>
      </div>
    );
  }
}

export default Comment;
