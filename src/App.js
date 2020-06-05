import React from 'react';
import './App.css';
import routes from './routes'
import {connect} from 'react-redux'
import Header from './components/Header'
import AuthHeader from './components/AuthHeader'

function App(props) {
  // console.log('LOOK ', props)
  return (
    <div className="App">
      {props.isLoggedIn ? <Header/> : <AuthHeader/>}
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App)
