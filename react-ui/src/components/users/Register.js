import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor(props) {
    super(props)  
    this.state = {
       username: '',
       email: '',
       password: ''
    }
  }

  handleChange = e => {
    e.persist()
    this.setState(() => ({
      [e.target.name]: e.target.value
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    axios.post(`http://localhost:3002/users/register`, formData)
      .then(response => {
        console.log(response.data)
        if(response.data.errors){
          alert(response.data.message)
        } else{
          this.props.history.push('/users/login')
        }
      })
  }
  
  render() {
    return (
      <div className="container">
        <h2 className="text-primary">Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Username</label>
              <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username here.." />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email</label>           
              <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Password</label>
              <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Register" />
        </form>
      </div>
    )
  }
}

export default Register
