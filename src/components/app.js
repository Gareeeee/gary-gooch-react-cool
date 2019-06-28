import React, { Component } from 'react';
import moment from 'moment';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import PortfolioContainer from './portfolio/portfolio-container.js';
import NavigationContainer from './navigation/navigation-container'
import Home from "./pages/home"
import About from  "./pages/about"
import Contact from  "./pages/contact"
import Blog from  "./pages/blog"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        

      <Router>
        <div>
        <NavigationContainer/>
        
        <Switch>
     
           <Route exact path='/' Component component={Home} />
           <Route path="/about" component={About} />
        </Switch>
        </div>
      </Router>

        <h1>DevCamp React Starter</h1>
        
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
