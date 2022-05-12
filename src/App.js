import './App.css';
import Layout from './Components/Layout/Layout';
import React, { Component } from 'react'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Burger builder</h1>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App