import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import MyCards from '../components/MyCards';
import Footer from '../components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <div className="container ">
      <Jumbotron/>
      <div className="row mt-1 mb-2">
        <MyCards />
      </div>
      <Footer copyright="Copyright © React Website" />
    </div>
    </>
  );
}

export default App;