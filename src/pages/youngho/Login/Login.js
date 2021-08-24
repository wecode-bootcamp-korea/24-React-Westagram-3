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

  handleLoginInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { checkIdPassword, handleLoginInput } = this;
    const { loginId, loginPassword } = this.state;
    return (
      <div>
        <div className="container">
          <header className="header">Westagram</header>
          <form className="loginForm" onKeyUp={checkIdPassword}>
            <input
              id="id"
              name="loginId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleLoginInput}
            />
            <input
              id="password"
              name="loginPassword"
              type="password"
              placeholder="비밀번호"
              onChange={handleLoginInput}
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
                disabled={
                  loginId.length &&
                  loginPassword.length >= 5 &&
                  loginId.includes('@')
                    ? false
                    : true
                }
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
