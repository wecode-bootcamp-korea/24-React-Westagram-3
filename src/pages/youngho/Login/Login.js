import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './Login.css';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/main');
  };
  render() {
    return (
      <div>
        <div className="container">
          <header className="header">Westagram</header>
          <form className="loginForm">
            <input
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input id="password" type="password" placeholder="비밀번호" />
            {/* <Link to="/main">
              <button id="loginButton">로그인</button>
            </Link> */}
            <button id="loginButton" onClick={this.goToMain}>
              로그인
            </button>
          </form>
          <a href="#!" className="findPassword">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

// export default Login;
export default withRouter(Login);
