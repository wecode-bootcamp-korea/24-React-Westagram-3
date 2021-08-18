import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="loginBoard">
        <div className="logo">Westagram</div>

        <form action="" className="loginTable">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="loginId"
          />
          <input type="text" placeholder="비밀번호" className="loginPw" />
          <Link to="/main-sejun" style={{ textDecoration: 'none' }}>
            <button className="loginBtn">로그인</button>
          </Link>
        </form>

        <Link
          to="/signup"
          className="forgetPw"
          style={{ textDecoration: 'none' }}
        >
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    );
  }
}

export default Login;
