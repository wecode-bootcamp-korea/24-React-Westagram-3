import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Article from '../Article/Article';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="Main">
          <main className="mainJun">
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

            <Article />
          </main>

          <aside className="asideJun">
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
                <span className="copyright">
                  @ 2021 INSTAGRAM FROM FACEBOOK
                </span>
              </div>
            </div>
          </aside>
        </div>
      </>
    );
  }
}

export default Main;
