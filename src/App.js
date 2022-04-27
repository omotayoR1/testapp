import React from 'react';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';
import './App.css';
import Herosection from './Herosection';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
    return ( 
        <Router>
            <div className="app">
            <Switch>
                <Route>
                    <Navbar/>
                    <Herosection />
                    {/*the home components was demanded for this task, I add the route so i can create a mvie detail page later in future */}
                    <Home />
                </Route>
            </Switch>
            </div>
        </Router>
     );
}
 
export default App;