import React from 'react';
import Comment from '../Comment/Comment';
import './Feed.scss';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    const { comment } = this.props.data;
    this.state = {
      comment: comment,
      commentInputValue: '',
    };
  }

  addComment = () => {
    const { comment, commentInputValue } = this.state;
    if (commentInputValue.length >= 1) {
      const newComment = {
        id: comment.length + 1,
        content: commentInputValue,
        isLiked: false,
      };
      this.setState({
        comment: [...comment, newComment],
        commentInputValue: '',
      });
    }
  };

  deleteComment = e => {
    const { comment } = this.state;
    const deleteCommentId = Number(e.target.id);
    const result = comment.filter(comment => comment.id !== deleteCommentId);
    this.setState({
      comment: result,
    });
  };

  inputEnterPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addComment();
    }
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      commentInputValue: value,
    });
  };

  render() {
    const { inputEnterPress, onChange, addComment, deleteComment } = this;
    const { commentInputValue, comment } = this.state;
    const { alt, img, userName } = this.props.data;

    return (
      <div className="feed">
        <article>
          <div className="feedTop">
            <div className="feedUser">
              <img className="smallUserPicture" alt={alt} src={img} />
              <div className="feedId boldFont">{userName}</div>
            </div>
            <img
              className="feedMore"
              alt="더보기"
              src="/images/youngho/more.png"
            />
          </div>
          <img className="feedPicture" alt="피드사진" src={img} />
          <div className="feedBottom">
            <div className="feedIcons">
              <div className="FeedBottomLeftIcon">
                <img alt="빨간색하트" src="/images/youngho/redHeart.png" />
                <img alt="메세지" src="/images/youngho/speech-bubble.png" />
                <img alt="업로드" src="/images/youngho/upload.png" />
              </div>
              <img alt="저장" src="/images/youngho/ribbon.png" />
            </div>
            <div className="like">
              <img alt="좋아요를 누른 사람 사진" src={img} />
              <span className="boldFont">manja</span>님
              <span className="boldFont">외 7명</span>이 좋아합니다
            </div>
            {comment.map(comment => {
              return (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  userName={comment.userName}
                  comment={comment.content}
                  isLiked={comment.isLiked}
                  deleteComment={deleteComment}
                />
              );
            })}
          </div>
          <form className="addCommentFrom">
            <input
              className="writeComment"
              type="text"
              placeholder="댓글 달기..."
              onKeyPress={inputEnterPress}
              onChange={onChange}
              value={commentInputValue}
            />
            <input
              className={`postingButton ${
                commentInputValue.length ? 'activeButton' : ''
              }`}
              type="button"
              defaultValue="게시"
              onClick={addComment}
              disabled={commentInputValue.length ? false : true}
            />
          </form>
        </article>
      </div>
    );
  }
}

export default Feed;
