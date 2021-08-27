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

    const STORIES = [
      {
        alt: '스토리 프로필 사진',
        img: '/images/youngho/wecode.png',
        name: 'wecorder1',
        time: 43,
      },
      {
        alt: '스토리 프로필 사진',
        img: '/images/youngho/wecode.png',
        name: 'wecorder2',
        time: 3,
      },
      {
        alt: '스토리 프로필 사진',
        img: '/images/youngho/wecode.png',
        name: 'wecorder3',
        time: 23,
      },
      {
        alt: '스토리 프로필 사진',
        img: '/images/youngho/wecode.png',
        name: 'wecorder4',
        time: 27,
      },
      {
        alt: '스토리 프로필 사진',
        img: '/images/youngho/wecode.png',
        name: 'wecorder5',
        time: 13,
      },
    ];

    const Stories = STORIES.map(store => {
      return (
        <div className="story">
          <img alt={store.alt} src={store.img} />
          <div>
            <div className="boldFont">{store.name}</div>
            <div className="lightFont">{store.time}분 전</div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Nav />
        <main>
          <div className="content">
            <div>
              {feeds.map(feed => {
                return <Feed key={`feed${feed.id}`} data={feed} />;
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
                <div className="seeStory">{Stories}</div>
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
