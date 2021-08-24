import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idVal: '',
      pwVal: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      idVal: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwVal: event.target.value,
    });
  };

  render() {
    return (
      <div className="LoginJiyoung">
        <div className="container">
          <h1 lang="en">westagram</h1>
          <div className="login-container">
            <form action="" method="post" className="login-form">
              <input
                onChange={this.handleIdInput}
                type="text"
                className="user-account"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                required
              />
              <input
                onChange={this.handlePwInput}
                type="password"
                className="user-pw"
                placeholder="비밀번호(최소 5자 이상)"
                required
              />
            </form>
            <Link to="/main-jiyoung">
              <button
                className={
                  this.state.idVal.includes('@') && this.state.pwVal.length >= 5
                    ? 'login-btn active'
                    : 'login-btn'
                }
              >
                로그인
              </button>
            </Link>
          </div>
          <a href="#!" className="find-pw">
            비밀번호를 잊으셨나요?
          </a>
        </div>
        <script src="./js/login.js"></script>
      </div>
    );
  }
}

export default Login;
