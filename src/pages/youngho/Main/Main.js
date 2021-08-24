import React from 'react';

import Comment from '../../../components/Comment/Comment';
import Nav from '../../../components/Nav/Nav';
import Feed from '../../../components/Feed/Feed';

import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      feeds: [],
      commentContent: '',
    };
  }

  addComment = () => {
    const { comments, commentContent } = this.state;
    const _comments = comments;
    _comments.push({ content: commentContent });
    this.setState({
      comments: _comments,
      commentContent: '',
    });
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      commentContent: value,
    });
  };

  commentEnterPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addComment();
    }
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    const { comments, commentContent, feeds } = this.state;
    const { commentEnterPress, onChange, addComment } = this;
    return (
      <div>
        <Nav />
        <main>
          <div className="content">
            <div>
              <article>
                <div className="feedTop">
                  <div className="feedUser">
                    <img
                      className="smallUserPicture"
                      alt="프로필사진"
                      src="/images/youngho/hanRiver.jpeg"
                    />
                    <div className="feedId boldFont">bbangho</div>
                  </div>
                  <img
                    className="feedMore"
                    alt="더보기"
                    src="/images/youngho/more.png"
                  />
                </div>
                <img
                  className="feedPicture"
                  alt="피드사진"
                  src="/images/youngho/hanRiver.jpeg"
                />
                <div className="feedBottom">
                  <div className="feedIcons">
                    <div className="FeedBottomLeftIcon">
                      <img
                        alt="빨간색하트"
                        src="/images/youngho/redHeart.png"
                      />
                      <img
                        alt="메세지"
                        src="/images/youngho/speech-bubble.png"
                      />
                      <img alt="업로드" src="/images/youngho/upload.png" />
                    </div>
                    <img alt="저장" src="/images/youngho/ribbon.png" />
                  </div>
                  <div className="like">
                    <img
                      alt="좋아요를 누른 사람 사진"
                      src="/images/youngho/hanRiver.jpeg"
                    />
                    <span className="boldFont">manja</span>님
                    <span className="boldFont">외 7명</span>이 좋아합니다
                  </div>
                  {comments.map((comment, i) => {
                    return (
                      <Comment
                        key={`comment${i}`}
                        userName={comment.userName}
                        comment={comment.content}
                      />
                    );
                  })}
                </div>
                <form className="addCommentFrom">
                  <input
                    className="writeComment"
                    type="text"
                    placeholder="댓글 달기..."
                    onKeyPress={commentEnterPress}
                    onChange={onChange}
                    value={commentContent}
                  />
                  <input
                    className="postingButton"
                    type="button"
                    defaultValue="게시"
                    onClick={addComment}
                  />
                </form>
              </article>
              {feeds.map(feed => {
                return (
                  <Feed
                    key={feed.id}
                    data={feed}
                    onChange={onChange}
                    value={commentContent}
                  />
                );
              })}
            </div>
            <div className="mainRight">
              <div className="rightTop">
                <img
                  className="wecodeLogo"
                  alt="위코드 사진"
                  src="/images/youngho/wecode.png"
                />
                <div>
                  <div className="boldFont">wecode_bootcamp</div>
                  <div className="lightFont">WeCode | 위코드</div>
                </div>
              </div>
              <div className="rightMiddle">
                <div className="seeAllStory">
                  <div className="lightFont">스토리</div>
                  <div className="boldFont">모두 보기</div>
                </div>
                <div className="seeStory">
                  <div className="story">
                    <img
                      alt="스토리 프로필 사진"
                      src="/images/youngho/wecode.png"
                    />
                    <div>
                      <div className="boldFont">wecoder1</div>
                      <div className="lightFont">16분 전</div>
                    </div>
                  </div>
                  <div className="story">
                    <img
                      alt="스토리 프로필 사진"
                      src="/images/youngho/wecode.png"
                    />
                    <div>
                      <div className="boldFont">wecoder2</div>
                      <div className="lightFont">52분 전</div>
                    </div>
                  </div>
                  <div className="story">
                    <img
                      alt="스토리 프로필 사진"
                      src="/images/youngho/wecode.png"
                    />
                    <div>
                      <div className="boldFont">wecoder3</div>
                      <div className="lightFont">5분 전</div>
                    </div>
                  </div>
                  <div className="story">
                    <img
                      alt="스토리 프로필 사진"
                      src="/images/youngho/wecode.png"
                    />
                    <div>
                      <div className="boldFont">wecoder4</div>
                      <div className="lightFont">26분 전</div>
                    </div>
                  </div>
                  <div className="story">
                    <img
                      alt="스토리 프로필 사진"
                      src="/images/youngho/wecode.png"
                    />
                    <div>
                      <div className="boldFont">wecoder5</div>
                      <div className="lightFont">53분 전</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightMiddle">
                <div className="friendsRecommendContainer">
                  <div className="lightFont">회원님을 위한 추천</div>
                  <div className="boldFont">모두 보기</div>
                </div>
                <div className="friendsRecommendList">
                  <div className="friendsRecommend">
                    <img
                      alt="친구추천 프로필 사진"
                      src="/images/youngho/wecode.png"
                    />
                    <div>
                      <div className="boldFont">홍길동</div>
                      <div className="lightFont">블라블라님 외 2명이 ...</div>
                    </div>
                    <div className="followFont boldFont">팔로우</div>
                  </div>
                  <div className="friendsRecommend">
                    <img
                      alt="친구추천 프로필 사진"
                      src="/images/youngho/wecode.png"
                    />
                    <div>
                      <div className="boldFont">아무개</div>
                      <div className="lightFont">시끌시끌님 외 2명이 ...</div>
                    </div>
                    <div className="followFont boldFont">팔로우</div>
                  </div>
                  <div className="friendsRecommend">
                    <img
                      alt="친구추천 프로필 사진"
                      src="/images/youngho/wecode.png"
                    />
                    <div>
                      <div className="boldFont">어쩌구</div>
                      <div className="lightFont">얄라얄라님 외 2명이 ...</div>
                    </div>
                    <div className="followFont boldFont">팔로우</div>
                  </div>
                  <div className="friendsRecommend">
                    <img
                      alt="친구추천 프로필 사진"
                      src="/images/youngho/wecode.png"
                    />
                    <div>
                      <div className="boldFont">저쩌구</div>
                      <div className="lightFont">욜로욜로님 외 2명이 ...</div>
                    </div>
                    <div className="followFont boldFont">팔로우</div>
                  </div>
                  <div className="friendsRecommend">
                    <img
                      alt="친구추천 프로필 사진"
                      src="/images/youngho/wecode.png"
                    />
                    <div>
                      <div className="boldFont">쏼라쏼라</div>
                      <div className="lightFont">블라블라님 외 2명이 ...</div>
                    </div>
                    <div className="followFont boldFont">팔로우</div>
                  </div>
                </div>
              </div>
              <footer>
                <div className="lightFont">
                  Westagram 정보 . 지원 . 홍보 센터 . API . 채용정보 .
                  개인정보처리방침 . 약관 . 디렉터리 . 프로필 . 해시태그 . 언어
                </div>
                <div className="lightFont boldFont">© 2021 WESTAGRAM</div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
