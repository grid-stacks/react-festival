import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Blog from './pages/Blog';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/blog' component={Blog} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
