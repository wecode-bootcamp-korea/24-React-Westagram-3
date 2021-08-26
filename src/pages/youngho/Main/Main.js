import React from 'react';

import Nav from '../../../components/Nav/Nav';
import Feed from '../../../components/Feed/Feed';

import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('/data/feedData.json', {
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
    const { feeds } = this.state;

    return (
      <div>
        <Nav />
        <main>
          <div className="content">
            <div>
              {feeds.map(feed => {
                return <Feed key={`feed${feed.id}`} data={feed} />;
              })}
              {/* <FeedList data={feeds} /> */}
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
