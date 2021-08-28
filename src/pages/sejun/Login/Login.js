import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleFetch = () => {
    fetch('http://10.58.0.117:8000/users/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Hope',
        phone: '010-2323-3434',
        email: this.state.idValue,
        nickname: 'Hope',
        password: this.state.pwValue,
      }),
    });
  };

  render() {
    return (
      <div className="loginBoard">
        <div className="logo">Westagram</div>
        <form action="" className="loginTable">
          <input
            onChange={function handleInput(e) {
              this.setState({
                idValue: e.target.value,
              });
              e.preventDefault();
            }.bind(this)}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="loginId"
          />
          <input
            onChange={function handleInput(e) {
              this.setState({
                pwValue: e.target.value,
              });
              e.preventDefault();
            }.bind(this)}
            type="text"
            placeholder="비밀번호"
            className="loginPw"
          />

          <Link to="/main-sejun" style={{ textDecoration: 'none' }}>
            <button
              onClick={this.handleFetch}
              className={
                this.state.idValue.includes('@') &&
                this.state.pwValue.length >= 5
                  ? 'loginBtn active'
                  : 'loginBtn nonActive'
              }
              disabled
            >
              로그인
            </button>
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
