import React, { Component } from 'react'
import Header from '../AllLoad/Header';
import Footer from '../AllLoad/Footer';
import LoadMyVoca from '../Part2/ListVoca/loadMyVoca';
class MyVocabulary extends Component {
  render() {
    return (
      <div>
        <Header />

        <LoadMyVoca />

        <Footer />
      </div>
    )
  }
}
export default MyVocabulary