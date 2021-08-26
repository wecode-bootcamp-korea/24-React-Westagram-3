import React from 'react';

import './Comment.scss';

class Comment extends React.Component {
  render() {
    const { comment, userName, isLiked, deleteComment } = this.props;
    return (
      <div className="comment">
        <span className="boldFont">{userName ? userName : 'bbangho'}</span>
        {comment}
        <img
          id={this.props.id}
          className="commentDelete"
          alt="댓글 삭제"
          src="/images/youngho/garbage.png"
          onClick={deleteComment}
        />
        <img
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
