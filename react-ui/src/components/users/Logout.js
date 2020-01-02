import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { resetUser } from '../../redux/userActions'


class Logout extends React.Component {

  componentDidMount(){
    axios.delete(`http://localhost:3002/users/logout`, {
      headers: {
        'x-auth': localStorage.getItem('userAuthToken')
      }
    })
    .then(response => {
      localStorage.removeItem('userAuthToken')
      this.props.dispatch(resetUser())
      this.props.history.push('/users/login')
    })
  }

  render() {
    return (
      <div>
        <p>Logging out..</p>
      </div>
    )
  }
}

export default connect()(Logout)
