import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../redux/reducer'

class Register extends Component {
  
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  register = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    axios.post('/auth/register', {email, password})
    .then( res => {
      this.props.loginUser(res.data)
      this.props.history.push('/dashboard')
    })
    .catch(err => {
      alert(err.response.data)
    })
  }

  render() {
    const {email, password} = this.state
    return (
      <div>
        <form onSubmit={(e) => this.login(e)}>
          <input placeholder='email...' 
            type='text'
            name='email' 
            value={email} 
            onChange={e => this.changeHandler(e)}/>
          <input placeholder='password...'
            type='password'
            value={password}
            name='password'
            onChange={e => this.changeHandler(e)}/>
          <input
            type='submit'
            value='Register'/>
        </form>
        <span>Already have an account? Login here:</span>
        <Link to='/'>
          Login
        </Link>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {loginUser})(Register)