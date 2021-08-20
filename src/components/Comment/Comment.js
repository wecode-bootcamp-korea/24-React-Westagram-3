import React from 'react';

import './Comment.scss';

class Comment extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        <span className="boldFont">bbangho</span>
        {comment}
        <img
          className="commentDelete"
          alt="댓글 삭제"
          src="/images/youngho/garbage.png"
        />
        <img
          className="commentHeart"
          alt="댓글 하트"
          src="/images/youngho/heart.png"
        />
      </div>
    );
  }
}

export default Comment;
