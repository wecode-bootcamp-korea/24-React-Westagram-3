import React from 'react';
// import Comment from '../Comment/Comment';
import Feed from '../Feed/Feed';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="contentWrapper">
        <main>
          <div className="stories">
            <div className="story">
              <img
                src="https://www.svgrepo.com/show/134285/character.svg"
                alt=""
              />
              <div className="stryId">wkndshi</div>
            </div>

            <div className="story">
              <img
                src="https://www.svgrepo.com/show/134285/character.svg"
                alt=""
              />
              <div className="stryId">wkndshi</div>
            </div>

            <div className="story">
              <img
                src="https://www.svgrepo.com/show/134285/character.svg"
                alt=""
              />
              <div className="stryId">wkndshi</div>
            </div>

            <div className="story">
              <img
                src="https://www.svgrepo.com/show/134285/character.svg"
                alt=""
              />
              <div className="stryId">wkndshi</div>
            </div>

            <div className="story">
              <img
                src="https://www.svgrepo.com/show/134285/character.svg"
                alt=""
              />
              <div className="stryId">wkndshi</div>
            </div>

            <div className="story">
              <img
                src="https://www.svgrepo.com/show/134285/character.svg"
                alt=""
              />
              <div className="stryId">wkndshi</div>
            </div>

            <div className="story">
              <img
                src="https://www.svgrepo.com/show/134285/character.svg"
                alt=""
              />
              <div className="stryId">wkndshi</div>
            </div>
          </div>

          <Feed />

          {/* <article>
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
                  <i className="fas fa-ellipsis-h"></i>
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
                        <span className="likeEmoji">
                          <svg
                            aria-label="좋아요"
                            className="_8-yf5 bigLike"
                            fill="#262626"
                            height="24"
                            role="img"
                            viewBox="0 0 48 48"
                            width="24"
                          >
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                          <svg
                            aria-label="좋아요 취소"
                            className="_8-yf5 bigDislike"
                            display="none"
                            fill="#ed4956"
                            height="24"
                            role="img"
                            viewBox="0 0 48 48"
                            width="24"
                          >
                            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                        </span>
                        <svg
                          aria-label="댓글 달기"
                          className="_8-yf5 "
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path
                            clipRule="evenodd"
                            d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                        <svg
                          aria-label="게시물 공유"
                          className="_8-yf5 "
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                        </svg>
                      </div>
                      <div className="emoji">
                        <svg
                          aria-label="저장"
                          className="_8-yf5 "
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                        </svg>
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
                          <svg
                            aria-label="좋아요"
                            className="_8-yf5 white"
                            display="inline-block"
                            fill="#262626"
                            height="12"
                            role="img"
                            viewBox="0 0 48 48"
                            width="12"
                          >
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                          <svg
                            aria-label="좋아요 취소"
                            className="_8-yf5 red"
                            fill="#ed4956"
                            display="none"
                            height="12"
                            role="img"
                            viewBox="0 0 48 48"
                            width="12"
                          >
                            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="comment">
                        <span className="commentId">olympics</span>
                        <span className="commentContent">keeping going</span>
                        <button className="likeBtn">
                          <svg
                            aria-label="좋아요"
                            className="_8-yf5 white"
                            display="inline-block"
                            fill="#262626"
                            height="12"
                            role="img"
                            viewBox="0 0 48 48"
                            width="12"
                          >
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                          <svg
                            aria-label="좋아요 취소"
                            className="_8-yf5 red"
                            fill="#ed4956"
                            display="none"
                            height="12"
                            role="img"
                            viewBox="0 0 48 48"
                            width="12"
                          >
                            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="comment">
                        <span className="commentId">gi_vely</span>
                        <span className="commentContent">🥳🥳🥳</span>
                        <button className="likeBtn">
                          <svg
                            aria-label="좋아요"
                            className="_8-yf5 white"
                            display="inline-block"
                            fill="#262626"
                            height="12"
                            role="img"
                            viewBox="0 0 48 48"
                            width="12"
                          >
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                          <svg
                            aria-label="좋아요 취소"
                            className="_8-yf5 red"
                            fill="#ed4956"
                            display="none"
                            height="12"
                            role="img"
                            viewBox="0 0 48 48"
                            width="12"
                          >
                            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                        </button>
                      </div>
                      {this.state.commentList.map(item => (
                        <Comment
                          key={this.state.key}
                          user={this.state.id}
                          data={item}
                        />
                      ))}
                    </div>

                    <div className="hours">15시간 전</div>
                    <div className="commentInput">
                      <div action="" className="form">
                        <svg
                          aria-label="이모티콘"
                          className="_8-yf5 "
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                          <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
                        </svg>
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
          </article> */}
        </main>

        <aside>
          <div className="asideContent">
            <div className="sideHeader">
              <img
                src="https://w7.pngwing.com/pngs/786/468/png-transparent-bart-simpson-holding-skateboard-bart-simpson-homer-simpson-lisa-simpson-marge-simpson-maggie-simpson-bart-simpson-springfield-cartoon-fictional-character.png"
                alt=""
              />
              <div className="sideHeaderId">
                <span>3__jun</span>
                <span>3_jun</span>
              </div>
              <div className="sideHeaderTrans">전환</div>
            </div>
            <div className="asideStories">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>

            <ul className="recommends">
              <li className="rcmdUser">
                <img
                  src="https://w7.pngwing.com/pngs/786/468/png-transparent-bart-simpson-holding-skateboard-bart-simpson-homer-simpson-lisa-simpson-marge-simpson-maggie-simpson-bart-simpson-springfield-cartoon-fictional-character.png"
                  alt=""
                />
                <div className="rcmdUserId">
                  <span>simson</span>
                  <span>hommer님이 팔로우 합니다.</span>
                </div>
                <div className="follow">팔로우</div>
              </li>

              <li className="rcmdUser">
                <img
                  src="https://w7.pngwing.com/pngs/786/468/png-transparent-bart-simpson-holding-skateboard-bart-simpson-homer-simpson-lisa-simpson-marge-simpson-maggie-simpson-bart-simpson-springfield-cartoon-fictional-character.png"
                  alt=""
                />
                <div className="rcmdUserId">
                  <span>simson</span>
                  <span>hommer님이 팔로우 합니다.</span>
                </div>
                <div className="follow">팔로우</div>
              </li>

              <li className="rcmdUser">
                <img
                  src="https://w7.pngwing.com/pngs/786/468/png-transparent-bart-simpson-holding-skateboard-bart-simpson-homer-simpson-lisa-simpson-marge-simpson-maggie-simpson-bart-simpson-springfield-cartoon-fictional-character.png"
                  alt=""
                />
                <div className="rcmdUserId">
                  <span>simson</span>
                  <span>hommer님이 팔로우 합니다.</span>
                </div>
                <div className="follow">팔로우</div>
              </li>

              <li className="rcmdUser">
                <img
                  src="https://w7.pngwing.com/pngs/786/468/png-transparent-bart-simpson-holding-skateboard-bart-simpson-homer-simpson-lisa-simpson-marge-simpson-maggie-simpson-bart-simpson-springfield-cartoon-fictional-character.png"
                  alt=""
                />
                <div className="rcmdUserId">
                  <span>simson</span>
                  <span>hommer님이 팔로우 합니다.</span>
                </div>
                <div className="follow">팔로우</div>
              </li>

              <li className="rcmdUser">
                <img
                  src="https://w7.pngwing.com/pngs/786/468/png-transparent-bart-simpson-holding-skateboard-bart-simpson-homer-simpson-lisa-simpson-marge-simpson-maggie-simpson-bart-simpson-springfield-cartoon-fictional-character.png"
                  alt=""
                />
                <div className="rcmdUserId">
                  <span>simson</span>
                  <span>hommer님이 팔로우 합니다.</span>
                </div>
                <div className="follow">팔로우</div>
              </li>
            </ul>

            <div className="sideFooter">
              <a href="/">소개</a>
              <a href="/">도움말</a>
              <a href="/">홍보</a>
              <a href="/">센터</a>
              <a href="/">API</a>
              <a href="/">채용 정보</a>
              <a href="/">개인정보처리방침</a>
              <a href="/">약관</a>
              <a href="/">위치</a>
              <a href="/">인기</a>
              <a href="/">계정</a>
              <a href="/">해시태그</a>
              <a href="/">언어</a>
              <br />
              <span className="copyright">@ 2021 INSTAGRAM FROM FACEBOOK</span>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

export default Main;
