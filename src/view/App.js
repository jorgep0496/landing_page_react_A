import React from 'react';

import MyCards from '../components/MyCards';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="container ">
      <div className="row mt-1 mb-2">
        <MyCards />
      </div>
      <Footer copyright="Copyright © React Website" />
    </div>
  );
}

export default App;