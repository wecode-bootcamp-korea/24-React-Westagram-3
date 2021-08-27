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

  handleLogin = () => {
    fetch('http://10.58.0.84:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.loginId,
        password: this.state.loginPassword,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  // handleLogin = () => {
  //   fetch('http://10.58.0.84:8000/users/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: '김영호',
  //       email: this.state.loginId,
  //       password: this.state.loginPassword,
  //       phone_number: '01012345678',
  //       date_of_birth: '1995-07-07',
  //       gender: 'M',
  //       address: 'Seoul',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log('결과: ', result));
  // };

  render() {
    const { checkIdPassword, handleLoginInput } = this;
    const { loginId, loginPassword } = this.state;

    const condition =
      loginId.length >= 5 && loginPassword.length >= 5 && loginId.includes('@');

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
                onClick={this.handleLogin}
                className={condition ? 'buttonActivate' : 'buttonDisabled'}
                id="loginButton"
                disabled={condition ? false : true}
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
