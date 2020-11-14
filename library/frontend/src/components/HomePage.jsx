import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './Sidebar'
import BookCreateUpdate from './BookCreateUpdate'
import BookList from './BooksList'

class HomePage extends Component {
    render() {
        return (
          <div className="app">
            <Router>
            <Sidebar/>
            <Switch>
              <Route path='/books' component={BookList} />
              <Route path='/addbook' component={BookCreateUpdate} />
            </Switch>
          </Router>
          </div>
        );

    }
}
export default HomePage;