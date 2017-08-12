import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import Navigation from './Navbar'
import './App.css';
import Homepage from './Homepage'

class App extends React.Component {
  render() {
    return (
        <Router>
          <Grid>
            <Navigation/>

            <div className="white">
              <Route exact path="/" component={Homepage}/>
            </div>
          </Grid>
        </Router>
    );
  }
}

export default App;
