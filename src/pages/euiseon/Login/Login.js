import React, { Component } from 'react';
import './Login.css';

/*class LoginEuiseon extends React.Component {
  constructor() {
    super();
    this.state = { idInputValue: '', pwInputValue: '' }; //state를 여기다가 저장한다.
  }
  idInput = event => {
    this.setState({
      idInputValue: `${event.target.value}`,
    });
  }
  pwInput = (event) => {
    this.setState({
      pwInputValue: `${event.target.value}`
    })
  }

  render() {
    return ();
  }
}*/

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    }; //state를 여기다가 저장한다.
  }

  handleIdInput = event => {
    this.setState({
      idInputValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwInputValue: event.target.value,
    });
  };

  render() {
    return (
      <div className="Login">
        <div className="wrap">
          <div className="container">
            <div className="inner">
              <header className="header">
                <h1>
                  <span className="logo">Westagram</span>
                </h1>
              </header>

              <form className="form">
                <div className="input_box">
                  <input
                    id="userID"
                    type="text"
                    placeholder="전화번호 사용자 이름 또는 이메일"
                    onChange={this.handleIdInput}
                  />
                </div>
                <div className="input_box">
                  <input
                    id="userPW"
                    type="password"
                    placeholder="비밀번호"
                    onChange={this.handlePwInput}
                  />
                </div>
                <div className="button_box">
                  <button
                    className={
                      this.state.idInputValue.includes('@') &&
                      this.state.pwInputValue.length >= 5
                        ? 'changeButtonColor'
                        : 'normalButtonColor'
                    }
                    type="button"
                    id="btn"
                    disabled={
                      this.state.idInputValue.includes('@') &&
                      this.state.pwInputValue.length >= 5
                        ? false
                        : true
                    }
                  >
                    <span>로그인</span>
                  </button>
                </div>
              </form>

              <div className="forgotPW">
                <a hef="#">
                  <span>비밀번호를 잊으셨나요?</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
