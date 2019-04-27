import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../src/AllLoad/Header';
import Footer from '../src/AllLoad/Footer';
import Cart_wizard from './CardWizard/Card_wizard';
import "../src/App";

class App extends Component {
  render() {
    return (

      <div>
        <div className="App">
          <Header />
          <Cart_wizard />
          <Footer />
        </div>

      </div>
    );
  }
}
export default App 
