import React, { Component, Fragment } from 'react';
import Signup from './Components/AuthComponent/Signup';
import  SpotifyNavbar  from './Components/HeaderComponent/SpotifyNavbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from './Components/AuthComponent/Signin';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Home from './Components/HomeComponent/Home';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
               <Router>
               <header>
                    <SpotifyNavbar/>
                    
                </header>
                <switch>
                    <main>
                        <Route path="/" exact component={Home} />
                        <Route  path="/signin" exact component={Signin} />
                        <Route path="/signup" exact component={Signup} />
                        <Route  path="*" component={PageNotFound} />

                    </main>
                </switch>

               
               </Router>
            </Fragment>
         );
    }
}
 
export default App;

