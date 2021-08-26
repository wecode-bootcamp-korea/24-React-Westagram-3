import React, { Component } from 'react';
import './Login.css';
import { withRouter } from 'react-router-dom';

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
    }); //저장한 state를 여기서 이 함수가 실행 되면서 state의 값을 변경한다.
  };

  handlePwInput = event => {
    this.setState({
      pwInputValue: event.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/main-euiseon');
  };

  handleLogin = () => {
    fetch('http://10.58.7.117:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idInputValue,
        password: this.state.pwInputValue,
        name: '서동규',
        phone_number: '010-1111-1111',
        address: '경기도 용인시',
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
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
                        : 'ButtonColor'
                    }
                    type="button"
                    id="btn"
                    disabled={
                      this.state.idInputValue.includes('@') &&
                      this.state.pwInputValue.length >= 5
                        ? false
                        : true
                    }
                    onClick={this.handleLogin}
                    onClick={this.goToMain}
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
