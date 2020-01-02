import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'
import Logout from './components/users/Logout'
import Profile from './components/users/Profile'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            
            {_.isEmpty(this.props.user) ? (
              <div>
                <li><Link to="/users/register">Register</Link></li>
                <li><Link to="/users/login">Login</Link></li>
              </div>
            ) : (
              <div>
                <li><Link to="/users/account">Account</Link></li>
                <li><Link to="/users/profile">Profile</Link></li>
                <li><Link to="/users/logout">Logout</Link></li>
              </div>
            )}
          </ul>

          <Switch>
            <Route path="/users/logout" component={Logout} />
            <Route path="/users/account" component={Account} />
            <Route path="/users/profile" component={Profile} />
            <Route path="/users/register" component={Register} />
            <Route path="/users/login" component={Login} />
            {/* <Route render={() => {
              return <h2>The page that you are looking for doesn't exist.</h2>
            }}/> */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateTProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStateTProps)(App)
