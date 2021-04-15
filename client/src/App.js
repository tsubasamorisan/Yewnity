import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components//Footer/Footer';
import Navbar from './components/Navbar/Navbar';
//----------------Jeff additions--------------------//
import EventMain from './components/Event-Main';
import EventMed from './components/Event-Med';
import EventMini from './components/Event-Mini';
import IssueMini from './components/Issue-Mini';
//----------------END Jeff additions--------------------//
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
    <Banner></Banner>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      <EventMini />
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
