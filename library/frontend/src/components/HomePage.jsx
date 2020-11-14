import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './Sidebar'

import BookList from './BooksList'
import { SidebarContent } from 'react-pro-sidebar';

class HomePage extends Component {
    render() {
        return (
          <div className="app">
            <Sidebar/>
            <BookList/>
           {/* <Router>
              <Sidebar/>
            <Switch>
              <Route path='/books' component={BookList} />
            </Switch>
          </Router>  */}
          </div>
        );

    }
}
export default HomePage;