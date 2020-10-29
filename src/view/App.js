import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import MyCards from '../components/MyCards';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row p-3">
          <Jumbotron />
        </div>
        <div className="row mt-1 mb-2 p-1">
          <MyCards />
        </div>
      </div>
      <Footer copyright="Copyright © React Website" />
    </>
  );
}

export default App;