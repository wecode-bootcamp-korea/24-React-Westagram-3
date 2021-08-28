import React from 'react';
import Comment from '../../../components/Comment/Comment';
import './Article.scss';

class Article extends React.Component {
  state = {
    user: '3_jun',
    comment: '',
    commentList: [],
  };

  commentState = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  commentAdd = () => {
    this.setState({
      comment: '',
      commentList: this.state.commentList.concat(this.state.comment),
      key: this.state.uuid + 1,
    });
  };
  render() {
    return (
      <article className="article">
        <div className="articleWrapper">
          <div className="articleHeader">
            <div className="articleAuthor">
              <img
                src="https://yt3.ggpht.com/ytc/AKedOLSJf_PYHF9czwJ0c99ARvsOkYLzoUGXSVhvOvlAkoc=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <span className="authorId">BBC News</span>
            </div>
            <div className="dot">
              <i className="fas fa-ellipsis-h" />
            </div>
          </div>

          <div className="feed">
            <img
              src="https://newsroom.korea.net/upload/content/editImage/20201230202905720_VBDSHY2C.png"
              alt=""
            />

            <div className="comments">
              <div className="commentWrapper">
                <div className="commentEmojis">
                  <div className="emoji">
                    <i className="far fa-heart" />
                    <i className="far fa-comment" />
                    <i className="far fa-envelope" />
                  </div>
                  <div className="emoji">
                    <i className="far fa-bookmark" />
                  </div>
                </div>

                <span className="likes">좋아요 35,888개</span>
                <div className="oldComments">
                  <div className="comment">
                    <span className="commentId">bbcnews</span>
                    <span className="commentContent">
                      The Dixie Fire in northern California has become the
                      second largest in state history
                    </span>
                    <span className="more">...더보기</span>
                  </div>
                  <div className="comment">
                    <span className="commentId">john.johnson</span>
                    <span className="commentContent">what the heck</span>
                    <button className="likeBtn">
                      <i className="far fa-heart" />
                    </button>
                  </div>
                  <div className="comment">
                    <span className="commentId">olympics</span>
                    <span className="commentContent">keeping going</span>
                    <button className="likeBtn">
                      <i className="far fa-heart" />
                    </button>
                  </div>
                  <div className="comment">
                    <span className="commentId">gi_vely</span>
                    <span className="commentContent">🥳🥳🥳</span>
                    <button className="likeBtn">
                      <i className="far fa-heart" />
                    </button>
                  </div>
                  {this.state.commentList.map(item => (
                    <Comment user={this.state.user} comment={item} />
                  ))}
                </div>

                <div className="hours">15시간 전</div>
                <div className="commentInput">
                  <div action="" className="form">
                    <i className="far fa-smile" />
                    <input
                      type="textarea"
                      className="commentArea"
                      value={this.state.comment}
                      placeholder="댓글 달기.."
                      onChange={this.commentState}
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          this.commentAdd();
                        }
                      }}
                    />
                    <button className="entry" onClick={this.commentAdd}>
                      게시
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Article;
