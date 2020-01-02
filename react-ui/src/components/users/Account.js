import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUser } from '../../redux/userActions'

class Account extends React.Component {

  componentDidMount(){
    axios.get(`http://localhost:3002/users/account`, {
      headers: {
        'x-auth': localStorage.getItem('userAuthToken')
      }
    })
      .then(response => {
        const user = response.data
        this.props.dispatch(setUser(user))        
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h2>User Account</h2>
        <p>{this.props.user.username}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(Account)
