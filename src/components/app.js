import React, { Component } from 'react';
import moment from 'moment';
import{ BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import axios from 'axios';


import PortfolioContainer from './portfolio/portfolio-container.js';
import NavigationContainer from './navigation/navigation-container'
import Home from "./pages/home";
import About from  "./pages/about";
import Contact from  "./pages/contact";
import Blog from  "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";

import NoMatch from "./no-match";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      loggedInStatus: "NOT_LOGGED_IN"
    };
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this)
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
  }

  handleSuccessfulLogin() {
    this.state ({
      loggedInStatus: "LOGGED_IN"
    });
  }
  
handleUnSuccessfulLogin() {
    this.state ({
      loggedInStatus: "NOT_LOGGED_IN"
    });
    
  }  
  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in", {withCredentials: true
  }).then(response =>{
    const loggedIn =response.data.logged_in;
    const loggedInStatus = this.state.loggedInStatus;
    // if logged in and  status is logged in return data
    // if logged in not logged in update state

    if (loggedIn && loggedInStatus === 'LOGGED_IN'){

    }else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN"){
      this.setState({loggedInStatus: "LOGGED_IN"});
    }
  else if (!loggedIn && loggedInStatus === "NOT_LOGGED_IN"){
    this.setState({loggedInStatus: "NOT_LOGGED_IN"});
  }
  })
  .catch(error =>{console.log("Error", error);})
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

authorizedPages(){
  return[
    <Route path="/blog" component={Blog} />
  ];
}

  render() {
    return (
      <div className='container'>
        

      <Router>
        <div>
        <NavigationContainer loggedInStatus={this.state.loggedInStatus}/>
        <h1>{this.state.loggedInStatus}</h1>
        
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <Switch>
     
           <Route exact path='/'  component={Home} />

           <Route path="/auth" 
          render={props =>(
            <Auth
               {...props}
               handleSuccessfulLogin={this.handleSuccessfulLogin}
               handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}/>
          )}
          />

           <Route path="/about-me" component={About} />

           <Route path="/Contact" component={Contact} />

           {this.state.loggedInStatus==='LOGGED_IN' ? this.authorizedPages(): null}
           <Route  path="/portfolio/:slug" component={PortfolioDetail}/>

           <Route component={NoMatch}/>

        </Switch>
        </div>
      </Router>

       
        
      </div>
    );
  }
}
