import React from 'react';
import { Website } from './Website';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
          <div>
            <Route path="" component={Website} />		
          </div>
        </Router>
    );
}

export default App;
