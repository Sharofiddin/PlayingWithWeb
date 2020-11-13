import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar'
import BookList from './BooksList'

class HomePage extends Component {
    render() {
        return (
            <>
             <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={BookList} />
          <Route path='/books' component={BookList} />
        </Switch>
      </Router>
    </>

            </>
        );

    }
}
export default HomePage;