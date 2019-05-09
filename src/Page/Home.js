import React, { Component } from 'react'
import Header from '../AllLoad/Header';
import Footer from '../AllLoad/Footer';
import MainContainer from '../main/MainContainer';

 class Home extends Component {
  render() {
    return (
      <div>
        <div>
         <div className="App">
          <Header />
        
           <MainContainer />

           <Footer />
        </div>
   </div>
      </div>
    )
  }
}
export default Home
