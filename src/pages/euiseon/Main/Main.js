import React from 'react';
import './Main.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  addCommentBtn = () => {
    console.log('hhihihihihihi');
    this.setState({
      commentList: this.state.commentList.concat([this.state.comment]),
      comment: '',
    });
    console.log(this.state.commentList);
  };

  handleCommentInput = event => {
    this.setState({ comment: event.target.value });
    console.log(this.state.comment);
  };

  render() {
    const userID = '_curry_s';
    return (
      <div className="Main">
        <div className="container">
          <div className="flex-item">
            <img className="insta-logo" src="images/euiseon/instagram.png" />
          </div>
          <div className="search-bar">
            <input className="top-search" type="search" placeholder="검색" />
          </div>
          <div className="flex-item">
            <img className="header-icons" src="images/euiseon/explore.png" />
            <img className="header-icons" src="images/euiseon/heart.png" />
            <img className="header-icons" src="images/euiseon/profile.png" />
          </div>
        </div>

        <main>
          <div className="feeds">
            <article>
              <div className="feed-header">
                <header>
                  <img className="curry" src="images/euiseon/stephcurry.jpeg" />
                  <span>_curry_s</span>
                  <svg
                    aria-label="옵션"
                    className="more-button"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <circle
                      clip-rule="evenodd"
                      cx="8"
                      cy="24"
                      fill-rule="evenodd"
                      r="4.5"
                    ></circle>
                    <circle
                      clip-rule="evenodd"
                      cx="24"
                      cy="24"
                      fill-rule="evenodd"
                      r="4.5"
                    ></circle>
                    <circle
                      clip-rule="evenodd"
                      cx="40"
                      cy="24"
                      fill-rule="evenodd"
                      r="4.5"
                    ></circle>
                  </svg>
                </header>
              </div>
              <div>
                <img
                  className="feed-image"
                  src="images/euiseon/donda.jpeg"
                  alt="Kanye West"
                  width="500"
                  height="400"
                />
              </div>
              <div className="icons">
                <svg
                  aria-label="좋아요"
                  className="like-button"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
                <svg
                  aria-label="댓글 달기"
                  className="comment-button"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  aria-label="게시물 공유"
                  className="share-cotent "
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
                <svg
                  aria-label="저장"
                  className="save-button "
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                </svg>
              </div>

              <div className="likes-count">
                <img
                  className="comment-img"
                  src="images/euiseon/stephcurry.jpeg"
                />
                <span>kanye_west</span> 님 외 <span>10명</span>이 좋아합니다
              </div>
              <div className="description">
                <span>칸예웨스트</span> <span>꿀잼</span>
                <svg
                  aria-label="좋아요"
                  className="mini-heart "
                  fill="#262626"
                  height="12"
                  role="img"
                  viewBox="0 0 48 48"
                  width="12"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              </div>
              <div style={{ color: '#C7C7C7' }}>50분전</div>
              <div className="comments">
                <ul>
                  {this.state.commentList.map((comments, id) => {
                    return (
                      <li key={id}>
                        {' '}
                        {userID} : {comments}
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
                  onChange={this.handleCommentInput}
                  value={this.state.comment}
                />
                <button
                  type="submit"
                  className="submit-comment"
                  type="text"
                  onClick={this.addCommentBtn}
                >
                  게시
                </button>
              </div>
            </article>
          </div>

          <div className="main-right">
            <div className="my-profile">
              <img
                className="curry-my-Profile"
                src="images/euiseon/stephcurry.jpeg"
              />
              <div className="profile-ID">
                <span>Stephen Curry</span>
                <span style={{ color: '#C7C7C7' }}>스테픈 커리</span>
              </div>
            </div>
            <div className="story-section">
              <div className="story-header">
                <div>
                  <span style={{ color: '#C7C7C7' }}>스토리</span>
                </div>
                <div>
                  <span>모두보기</span>
                </div>
              </div>
              <div className="story-container">
                <div className="story-user1">
                  <img className="curry" src="images/euiseon/myimg.jpeg" />
                  <div className="users-side-panel">
                    <span className="userID">_curry_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="story-user2">
                  <img className="curry" src="images/euiseon/myimg.jpeg" />
                  <div className="users-side-panel">
                    <span className="userID">_curry_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="story-user3">
                  <img className="curry" src="images/euiseon/myimg.jpeg" />
                  <div className="users-side-panel">
                    <span className="userID">_curry_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="story-user3">
                  <img className="curry" src="images/euiseon/myimg.jpeg" />
                  <div className="users-side-panel">
                    <span className="userID">_curry_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="story-user3">
                  <img className="curry" src="images/euiseon/myimg.jpeg" />
                  <div className="users-side-panel">
                    <span className="userID">_curry_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="story-user3">
                  <img className="curry" src="images/euiseon/myimg.jpeg" />
                  <div className="users-side-panel">
                    <span className="userID">_curry_s</span>
                    <span>16분전</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="recommend-friend-profile">
              <div className="recommend-header">
                <div>
                  <span style={{ color: '#C7C7C7' }}>회원님을 위한 추천</span>
                </div>
                <div>모두 보기</div>
              </div>
              <div className="recommend-user">
                <div className="story-user1">
                  <img className="curry" src="images/euiseon/myimg.jpeg" />
                  <div className="users-side-panel">
                    <span className="userID">_curry_s</span>
                    <span>16분전</span>
                  </div>
                  <div className="follow">
                    <span>팔로우</span>
                  </div>
                </div>
              </div>
              <div className="recommend-user">
                <div className="story-user1">
                  <img className="curry" src="images/euiseon/myimg.jpeg" />
                  <div className="users-side-panel">
                    <span className="userID">_curry_s</span>
                    <span>16분전</span>
                  </div>
                  <div className="follow">
                    <span>팔로우</span>
                  </div>
                </div>
              </div>
              <div className="recommend-user">
                <div className="story-user1">
                  <img className="curry" src="images/euiseon/myimg.jpeg" />
                  <div className="users-side-panel">
                    <span className="userID">_curry_s</span>
                    <span>16분전</span>
                  </div>
                  <div className="follow">
                    <span>팔로우</span>
                  </div>
                </div>
              </div>
            </div>

            <footer>
              <p>
                {' '}
                소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ 개인정보처리방침 ∙{' '}
                <br />
                약관 ∙ 위치 ∙ 인기계정 ∙ 해시태그 ∙ 언어
                <br></br>© 2021 INSTAGRAM FROM FACEBOOK
              </p>
            </footer>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
