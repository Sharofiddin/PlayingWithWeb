import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import LoginApp from './Login'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="container">
              <LoginApp />
            </div>
          );
      
    }
}
export default App;