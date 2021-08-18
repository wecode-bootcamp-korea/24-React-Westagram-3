import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Euiseon's 컴포넌트
import LoginEuiseon from './pages/euiseon/Login/Login';
import MainEuiseon from './pages/euiseon/Main/Main';

// Jiyoung's 컴포넌트
import LoginJiyoung from './pages/jiyoung/Login/Login';
import MainJiyoung from './pages/jiyoung/Main/Main';

// sejun's 컴포넌트
import LoginSejun from './pages/sejun/Login/Login';
import MainSejun from './pages/sejun/Main/Main';

//youngho's 컴포넌트
import LoginYoungho from './pages/youngho/Login/Login';
import MainYoungho from './pages/youngho/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/login-euiseon" component={LoginEuiseon} />
          <Route exact path="/main-euiseon" component={MainEuiseon} />

          <Route exact path="/login-jiyoung" component={LoginJiyoung} />
          <Route exact path="/main-jiyoung" component={MainJiyoung} />

          <Route exact path="/login-sejun" component={LoginSejun} />
          <Route exact path="/main-sejun" component={MainSejun} />

          <Route exact path="/login-youngho" component={LoginYoungho} />
          <Route exact path="/main-youngho" component={MainYoungho} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;
