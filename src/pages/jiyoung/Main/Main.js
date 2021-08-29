import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './components/Comment';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: [],
      content: '',
    };
  }

  keyDownEnter = event => {
    if (this.state.content && event.key === 'Enter') {
      event.preventDefault();
      this.uploadComment();
    }
  };

  getInputValue = event => {
    this.setState({
      content: event.target.value,
    });
  };

  uploadComment = event => {
    if (this.state.content) {
      this.setState({
        comment: this.state.comment.concat([this.state.content]),
        content: '',
      });
    }
  };

  render() {
    return (
      <div className="mainJiyoung">
        <Nav />
        <main>
          <section className="contents">
            <article>
              <div className="feedWriterHeader">
                <div className="feedWriter">
                  <img
                    alt="writer"
                    src="./images/jiyoung/writer.jpg"
                    className="profileImg"
                  />
                  <span className="writerId">kitty_bunny_pony</span>
                </div>
                <button type="button" className="menuBtn">
                  <img
                    alt="menu"
                    src="./images/jiyoung/menu.png"
                    className="icon"
                  />
                </button>
              </div>
              <div className="feedImg">
                <img
                  alt="feed"
                  src="./images/jiyoung/feed-image.jpg"
                  className="feedImg"
                />
              </div>
              <div className="feedInfo">
                <div className="feedBtns">
                  <div className="feedHandleBtns">
                    <button type="button" className="feedBtn">
                      <img
                        alt="like"
                        src="./images/jiyoung/like.png"
                        className="icon"
                      />
                    </button>
                    <button type="button" className="feedBtn">
                      <img
                        alt="comment"
                        src="./images/jiyoung/chat.png"
                        className="icon"
                      />
                    </button>
                    <button type="button" className="feedBtn">
                      <img
                        alt="export"
                        src="./images/jiyoung/export.png"
                        className="icon"
                      />
                    </button>
                  </div>
                  <button type="button" className="feedBtn bookmarkBtn">
                    <img
                      alt="bookmark"
                      src="./images/jiyoung/bookmark-white.png"
                      className="icon"
                    />
                  </button>
                </div>
                <div className="feedContainer">
                  <div className="feedLikers">
                    <div className="firstLiker">
                      <Link to="#!">
                        <img
                          alt="liker"
                          src="./images/jiyoung/liker.jpg"
                          className="profileImg"
                        />
                      </Link>
                      <p>
                        <span className="userId">cutiebbojjak</span>님{' '}
                        <span className="likers">외 100명</span>이 좋아합니다
                      </p>
                    </div>
                    <div className="writerComment">
                      <span className="userId">kitty_bunny_pony</span>
                      <span>여기가 핫플이라매! 웅성웅성... </span>
                      <span>더 보기</span>
                    </div>
                  </div>
                  <div className="commentsContainer">
                    <ul className="comments">
                      <li className="comment">
                        <span className="commenter userId">crushbOgOpa</span>
                        <span>언제 제대하는거야.. 그날만을 기다려😪</span>
                        <button type="button" className="deleteBtn">
                          <img
                            alt="deleteBtn"
                            src="./images/jiyoung/cancel.png"
                            className="deleteIcon"
                          />
                        </button>
                      </li>
                      {this.state.comment.map(content => {
                        return (
                          <li className="comment">
                            <span className="commenter userId">yOungly</span>
                            {content}
                            <button type="button" className="deleteBtn">
                              <img
                                alt="deleteBtn"
                                src="./images/jiyoung/cancel.png"
                                className="deleteIcon"
                              />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <p className="uploadTime">11분 전</p>
                  </div>
                </div>
              </div>
              <div className="newComment">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  onKeyDown={this.keyDownEnter}
                  onChange={this.getInputValue}
                />
                <span className="uploadBtn" onClick={this.uploadComment}>
                  게시
                </span>
              </div>
            </article>
          </section>
          <aside>
            <div className="myProfile">
              <Link to="#!">
                <img
                  alt="profile"
                  src="./images/jiyoung/my-profile.jpg"
                  className="myProfileImg"
                />
              </Link>
              <div className="userName">
                <div className="profile-info userId">dangDaeng2</div>
                <div className="userNickname">Wecode | 위코드멍멍</div>
              </div>
            </div>
            <div className="followerStories">
              <div className="storyHeader">
                <div className="storyTitle">스토리</div>
                <Link to="#!" target="_blank" className="viewAll">
                  모두 보기
                </Link>
              </div>
              <div className="listContainer">
                <div className="story">
                  <Link to="#!">
                    <img
                      alt="follower"
                      src="./images/jiyoung/profile2.jpg"
                      className="profileImg"
                    />
                  </Link>
                  <div className="follower-info">
                    <span className="userId">mungmung</span>
                    <span className="uploadTime">23분 전</span>
                  </div>
                </div>
                <div className="story">
                  <Link to="#!">
                    <img
                      alt="follower"
                      src="./images/jiyoung/profile3.jpg"
                      className="profile profileImg"
                    />
                  </Link>
                  <div className="follower-info">
                    <span className="userId">heyUrman</span>
                    <span className="uploadTime">1시간 전</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="followingRec">
              <div className="followingRecHeader">
                <div className="followingRecTitle">회원님을 위한 추천</div>
                <Link to="#!" target="_blank" className="viewAll">
                  모두 보기
                </Link>
              </div>
              <div className="listContainer">
                <div className="following">
                  <Link to="#!">
                    <img
                      alt="following"
                      src="./images/jiyoung/profile4.jpg"
                      className="profileImg"
                    />
                  </Link>
                  <div className="followingInfo">
                    <span className="userId">Uyahooops</span>
                    <span className="recUsers">
                      youngBi님 외 5명이 추천합니다
                    </span>
                  </div>
                  <button className="followBtn">팔로우</button>
                </div>
                <div className="following">
                  <Link to="#!">
                    <img
                      alt="following"
                      src="./images/jiyoung/profile5.jpg"
                      className="profileImg"
                    />
                  </Link>
                  <div className="followingInfo">
                    <span className="userId">yOungK_bbi</span>
                    <span className="recUsers">
                      himDleda님 외 37명이 추천합니다
                    </span>
                  </div>
                  <button className="followBtn">팔로우</button>
                </div>
              </div>
            </div>
            <div className="westagramInfo">
              <div className="westagramLink">
                <ul>
                  <li>
                    <Link to="#!">Westagram 정보</Link>·
                  </li>
                  <li>
                    <Link to="#!">지원</Link>·
                  </li>
                  <li>
                    <Link to="#!">홍보 센터</Link>·
                  </li>
                  <li>
                    <Link to="#!">API</Link>·
                  </li>
                  <li>
                    <Link to="#!">채용 정보</Link>·
                  </li>
                  <li>
                    <Link to="#!">개인정보처리방침</Link>·
                  </li>
                  <li>
                    <Link to="#!">약관</Link>·
                  </li>
                  <li>
                    <Link to="#!">디렉터리</Link>·
                  </li>
                  <li>
                    <Link to="#!">프로필</Link>·
                  </li>
                  <li>
                    <Link to="#!">해시태그</Link>·
                  </li>
                  <li>
                    <Link to="#!">언어</Link>
                  </li>
                </ul>
              </div>
              <span className="copyright">© 2021 WESTAGRAM</span>
            </div>
          </aside>
        </main>
      </div>
    );
  }
}

export default Main;
