import React from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginId: '',
      loginPassword: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      loginId: e.target.value,
    });
  };

  handlePasswordInput = e => {
    this.setState({
      loginPassword: e.target.value,
    });
  };

  render() {
    const { checkIdPassword, handleIdInput, handlePasswordInput } = this;
    const { loginId, loginPassword } = this.state;
    return (
      <div>
        <div className="container">
          <header className="header">Westagram</header>
          <form className="loginForm" onKeyUp={checkIdPassword}>
            <input
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
            />
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              onChange={handlePasswordInput}
            />
            <Link to="/main">
              <button
                className={
                  loginId.length &&
                  loginPassword.length >= 5 &&
                  loginId.includes('@')
                    ? 'buttonActivate'
                    : 'buttonDisabled'
                }
                id="loginButton"
              >
                로그인
              </button>
            </Link>
          </form>
          <a href="#!" className="findPassword">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
