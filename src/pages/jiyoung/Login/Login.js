import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSignUp = () => {
    this.props.history.push('./main-jiyoung');
    console.log(this.props.history);
  };

  render() {
    const { email, password } = this.state;
    const condition = email.includes('@') && password.length >= 5;
    return (
      <div className="loginJiyoung">
        <main className="container">
          <h1>westagram</h1>
          <div className="loginContainer">
            <form action="" method="post" className="loginForm">
              <input
                onChange={this.handleInut}
                type="text"
                name="email"
                className="userAccount"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                required
              />
              <input
                onChange={this.handleInput}
                type="password"
                name="password"
                className="userPw"
                placeholder="비밀번호(최소 5자 이상)"
                required
              />
            </form>
            <button
              onClick={this.handleSignUp}
              className={`loginBtn ${condition && 'active'}`}
              disabled={condition ? false : true}
            >
              로그인
            </button>
          </div>
          <a href="#!" className="findPw">
            비밀번호를 잊으셨나요?
          </a>
        </main>
      </div>
    );
  }
}

export default Login;
