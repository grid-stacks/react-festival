import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pricing' component={Pricing} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
