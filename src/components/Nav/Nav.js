import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    const logoImg = './images/sejun/instagram.png';
    return (
      <nav className="nav">
        <div className="navBar">
          <div className="logo">
            <img src={logoImg} alt="" />
            <span className="vertical"></span>
            <span>Westagram</span>
          </div>
          <div className="searchBar">
            <form action="">
              <input type="text" className="searchBox" placeholder="검색" />
            </form>
          </div>
          <div className="icons">
            <a href="/index">
              <i className="fas fa-home" />
            </a>

            <a href="/index">
              <i className="far fa-paper-plane" />
            </a>

            <a href="/index">
              <i className="far fa-compass" />
            </a>

            <a href="/index">
              <i className="far fa-heart" />
            </a>

            <div className="myId">
              <img
                src="https://w7.pngwing.com/pngs/786/468/png-transparent-bart-simpson-holding-skateboard-bart-simpson-homer-simpson-lisa-simpson-marge-simpson-maggie-simpson-bart-simpson-springfield-cartoon-fictional-character.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
