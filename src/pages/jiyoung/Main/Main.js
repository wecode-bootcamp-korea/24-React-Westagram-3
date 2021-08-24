import React from 'react';
import { Link } from 'react-router-dom';
import '../Main/Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="MainJiyoung">
        <main>
          <section className="contents">
            <article>
              <div className="feed-writer-header">
                <div className="feed-writer">
                  <img
                    alt="writer"
                    src="./images/jiyoung/writer.jpg"
                    className="profile profile-img"
                  />
                  <span lang="en" className="writer-id">
                    kitty_bunny_pony
                  </span>
                </div>
                <button type="button" className="menu-btn">
                  <img
                    alt="menu"
                    src="./images/jiyoung/menu.png"
                    className="icon"
                  />
                </button>
              </div>
              <div className="feed-img">
                <img
                  alt="feed"
                  src="./images/jiyoung/feed-image.jpg"
                  className="feed-img"
                />
              </div>
              <div className="feed-info">
                <div className="feed-btns">
                  <div className="feed-handle-btns">
                    <button type="button" className="feed-btn">
                      <img
                        alt="like"
                        src="./images/jiyoung/like.png"
                        className="icon"
                      />
                    </button>
                    <button type="button" className="feed-btn">
                      <img
                        alt="comment"
                        src="./images/jiyoung/chat.png"
                        className="icon"
                      />
                    </button>
                    <button type="button" className="feed-btn">
                      <img
                        alt="export"
                        src="./images/jiyoung/export.png"
                        className="icon"
                      />
                    </button>
                  </div>
                  <button type="button" className="feed-btn bookmard-btn">
                    <img
                      alt="bookmark"
                      src="./images/jiyoung/bookmark-white.png"
                      className="icon"
                    />
                  </button>
                </div>
                <div className="feed-container">
                  <div className="feed-likers">
                    <div className="first-liker">
                      <Link to="#!">
                        <img
                          alt="add-liker"
                          src="./images/jiyoung/liker.jpg"
                          className="profile profile-img"
                        />
                      </Link>
                      <p>
                        <span lang="en" className="user-id">
                          cutiebbojjak
                        </span>
                        님 <span className="likers">외 100명</span>이 좋아합니다
                      </p>
                    </div>
                    <div className="writer-comment">
                      <span className="user-id">kitty_bunny_pony</span>
                      <span>여기가 핫플이라매! 웅성웅성... </span>
                      <span>더 보기</span>
                    </div>
                  </div>
                  <div className="comments-container">
                    <ul className="comments">
                      <li className="comment">
                        <span className="commenter user-id">crushbOgOpa</span>
                        <span>언제 제대하는거야.. 그날만을 기다려😪</span>
                        <button type="button" className="delete-btn">
                          <img
                            alt="delete-btn"
                            src="./images/jiyoung/cancel.png"
                            className="delete-icon"
                          />
                        </button>
                      </li>
                    </ul>
                    <p className="upload-time">11분 전</p>
                  </div>
                </div>
              </div>
              <div className="new-comment">
                <input type="text" placeholder="댓글 달기..." />
                <button type="submit" className="upload-btn">
                  게시
                </button>
              </div>
            </article>
          </section>
          <aside>
            <div className="my-profile">
              <Link to="#!">
                <img
                  alt="profile"
                  src="./images/jiyoung/my-profile.jpg"
                  className="profile"
                />
              </Link>
              <div className="user-name">
                <div className="profile-info user-id">dangDaeng2</div>
                <div className="user-nickname">Wecode | 위코드멍멍</div>
              </div>
            </div>
            <div className="follower-stories">
              <div className="story-header">
                <div className="story-title">스토리</div>
                <Link to="#!" target="_blank" className="view-all">
                  모두 보기
                </Link>
              </div>
              <div className="story-list">
                <div className="story">
                  <Link to="#!">
                    <img
                      alt="follower"
                      src="./images/jiyoung/profile2.jpg"
                      className="profile profile-img"
                    />
                  </Link>
                  <div className="follower-info">
                    <span className="user-id">mungmung</span>
                    <span className="upload-time">23분 전</span>
                  </div>
                </div>
                <div className="story">
                  <Link to="#!">
                    <img
                      alt="follower"
                      src="./images/jiyoung/profile3.jpg"
                      className="profile profile-img"
                    />
                  </Link>
                  <div className="follower-info">
                    <span className="user-id">heyUrman</span>
                    <span className="upload-time">1시간 전</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="following-rec">
              <div className="following-rec-header">
                <div className="following-rec-title">회원님을 위한 추천</div>
                <Link to="#!" target="_blank" className="view-all">
                  모두 보기
                </Link>
              </div>
              <div className="following-list">
                <div className="following">
                  <Link to="#!">
                    <img
                      alt="following"
                      src="./images/jiyoung/profile4.jpg"
                      className="profile profile-img"
                    />
                  </Link>
                  <div className="following-info">
                    <span className="user-id">Uyahooops</span>
                    <span className="rec-users">
                      youngBi님 외 5명이 추천합니다
                    </span>
                  </div>
                  <button className="follow-btn">팔로우</button>
                </div>
                <div className="following">
                  <Link to="#!">
                    <img
                      alt="following"
                      src="./images/jiyoung/profile5.jpg"
                      className="profile profile-img"
                    />
                  </Link>
                  <div className="following-info">
                    <span className="user-id">yOungK_bbi</span>
                    <span className="rec-users">
                      himDleda님 외 37명이 추천합니다
                    </span>
                  </div>
                  <button className="follow-btn">팔로우</button>
                </div>
              </div>
            </div>
            <div className="westagram-info">
              <div className="westagram-link">
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
        <script src="js/main.js"></script>
      </div>
    );
  }
}

export default Main;
