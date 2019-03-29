import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Body from './components/Body';
import Footer from './components/Footer';




class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Route exact path="/components/Home" component={Home} />
        <Route exact path="/components/About" component={About} />
        <Route exact path="/components/Contact" component={Contact} />
        <hr />
        <Footer />



      </div>
    );
  }
}

export default App;