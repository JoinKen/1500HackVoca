import React, { Component } from 'react'
import Header from '../AllLoad/Header';
import Footer from '../AllLoad/Footer';
import LoadVoca from '../Part2/ListVoca/loadVoca';
 class MyVocabulary extends Component {
  render() {
    return (
      <div>
        <Header />
       
        <LoadVoca />

        <Footer />
      </div>
    )
  }
}
export default MyVocabulary