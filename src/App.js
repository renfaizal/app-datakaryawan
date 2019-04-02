import React from 'react'
import Layout from './app/Layout'
import Login from './app/login/Login'

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Layout />
      </div>
      
    );
  }
}

export default App