import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import VideoCreate from './../videos/VideoCreate';
import VideoEdit from './../videos/VideoEdit';
import VideoDelete from './../videos/VideoDelete';
import VideoList from './../videos/VideoList';
import VideoShow from './../videos/VideoShow';
import Header from '../../Header';
import history from '../../history';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    
    <div className="ui container">
      <Router history={history}>
        <div>
        <Navigation />
        <div>
          {/* <Header /> */}
          {/* <Switch> */}
          <Route path="/" exact component={VideoList} />
           {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
        {/* <Route path={ROUTES.HOME} component={HomePage} /> */}
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
         <Route path={ROUTES.ADMIN} component={AdminPage} /> 
            {/* <Route path="/" exact component={VideoList} /> */}
            <Route path="/videos/new" exact component={VideoCreate} />
            <Route path="/videos/edit/:id" exact component={VideoEdit} />
            <Route path="/videos/delete/:id" exact component={VideoDelete} />
            <Route path="/videos/:id" exact component={VideoShow} /> 
          {/* </Switch> */}
        </div>
        <div >
      
      <hr/>
       
    </div> 
    </div>
      </Router>
    </div>
);

export default withAuthentication(App);


{/* <div style={{display: 'flex', justifyContent: 'center'}}>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div> */}
