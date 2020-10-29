import './App.css';
import './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import Navbar from './components/Navbar';
import { Fragment } from 'react';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Fragment>
    <Navbar/>
    <div className="container">
      <Jumbotron/>
      
    </div>
    </Fragment>
  );
}

export default App;
