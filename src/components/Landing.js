import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {loginUser} from '../redux/reducer'
import {connect} from 'react-redux'

class Landing extends Component {

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

  login = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    axios.post('/auth/login', {email, password})
    .then( res => {
      this.props.loginUser(res.data)
      this.props.history.push('/dashboard')
    })
    .catch(err => {
      alert('Could not login')
      return null
    })
  }

  render() {
    const {email, password} = this.state
    console.log('LOOK ', this.props)
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
            value='login'/>
        </form>
        <span>Don't already have an account? Register here:</span>
        <Link to='/register'>
          Register
        </Link>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = {loginUser}
export default connect(mapStateToProps, mapDispatchToProps)(Landing)