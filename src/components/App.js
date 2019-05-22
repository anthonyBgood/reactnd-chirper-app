import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {

  componentDidMount(){
    
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        {
          this.props.loading?
          <div>LOADING</div>:
          <Dashboard/>
        }

        

      </div>
    )
  }
}

function mapStateToProps({ authedUser }){
  return{
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)