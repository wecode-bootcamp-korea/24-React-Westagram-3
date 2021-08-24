import React from 'react';

import './Comment.scss';

class Comment extends React.Component {
  render() {
    const { comment, userName, isLiked } = this.props;
    return (
      <div className="comment">
        <span className="boldFont">{userName ? userName : 'bbangho'}</span>
        {comment}
        <img
          className="commentDelete"
          alt="댓글 삭제"
          src="/images/youngho/garbage.png"
        />
        <img
          id={comment.id}
          className="commentHeart"
          alt="댓글 하트"
          src={
            isLiked
              ? '/images/youngho/redHeart.png'
              : '/images/youngho/heart.png'
          }
        />
      </div>
    );
  }
}

export default Comment;
