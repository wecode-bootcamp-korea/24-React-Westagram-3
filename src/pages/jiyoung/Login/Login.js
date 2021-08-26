import React from 'react';
import { withRouter } from 'react-router-dom';
import '../Login/Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailInput = event => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSignUp = () => {
    this.props.history.push('./main-jiyoung');
    console.log(this.props.history);
    // fetch('http://10.58.2.157:8000/users/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: 'jiyoung',
    //     email: this.state.email,
    //     password: this.state.password,
    //     phone_number: '123-456-7890',
    //     bio: 'jiyoung_bio',
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log('결과: ', res);
    //     this.setState({
    //       commentList: res,
    //     });
    //
    // if (res.token) {
    //   localStorage.setItem('token', res.token);
    //   this.props.history.push('/main-jiyoung');
    // } else {
    //   alert('아이디, 비밀번호 다시 입력해주세요.');
    // }
    //
    //  });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="LoginJiyoung">
        <div className="container">
          <h1 lang="en">westagram</h1>
          <div className="login-container">
            <form action="" method="post" className="login-form">
              <input
                onChange={this.handleEmailInput}
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
            <button
              onClick={this.handleSignUp}
              className={
                email.includes('@') && password.length >= 5
                  ? 'login-btn active'
                  : 'login-btn'
              }
              disabled={
                email.includes('@') && password.length >= 5 ? false : true
              }
            >
              로그인
            </button>
          </div>
          <a href="#!" className="find-pw">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
