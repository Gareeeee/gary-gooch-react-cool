import React, { Component } from 'react';
import moment from 'moment';
import{ BrowserRouter as Router,Switch,Route} from 'react-router-dom'



import PortfolioContainer from './portfolio/portfolio-container.js';
import NavigationContainer from './navigation/navigation-container'
import Home from "./pages/home"
import About from  "./pages/about"
import Contact from  "./pages/contact"
import Blog from  "./pages/blog"
import PortfolioDetail from "./portfolio/portfolio-detail"
import NoMatch from "./no-match"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        

      <Router>
        <div>
        <NavigationContainer/>
        <h1>DevCamp React Starter</h1>
        
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <Switch>
     
           <Route exact path='/' Component component={Home} />
           <Route path="/about-me" component={About} />
           <Route path="/Contact" component={Contact} />
           <Route path="/Blog" component={Blog} />
           <Route  path="/portfolio/:slug" component={PortfolioDetail}/>
           <Route component={NoMatch}/>

        </Switch>
        </div>
      </Router>

       
        
      </div>
    );
  }
}
