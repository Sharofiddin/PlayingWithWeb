import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BooksList from "./components/BooksList";
import BookCreateUpdate from './BookCreateUpdate'
import './App.css';
import AuthorsList from './AuthorsList'
import PublishersList from './PublishersList'
import AuthorCreateUpdate from './AuthorCreateUpdate'
import PublisherCreateUpdate from './PublisherCreateUpdate'

const BaseLayout = () => (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/#">Manbalar xazinasi</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">Kitoblar</a>
                    <a className="nav-item nav-link" href="/book">Kitob qo'shish</a>
                    <a className="nav-item nav-link" href="/authors">Mualliflar</a>
                    <a className="nav-item nav-link" href="/insert_author">Yangi muallif kiritish</a>
                    <a className="nav-item nav-link" href="/publishers">Nashriyotlar</a>
                    <a className="nav-item nav-link" href="/insert_publisher">Yangi nashriyot kiritish</a>
                </div>
            </div>
        </nav>
        <div className="content">
            <Route path="/" exact component={BooksList} />
            <Route path="/book/" exact component={BookCreateUpdate} />
            <Route path="/authors/" exact component={AuthorsList} />
            <Route path="/insert_author/" exact component={AuthorCreateUpdate} />
            <Route path="/publishers/" exact component={PublishersList} />
            <Route path="/insert_publisher/" exact component={PublisherCreateUpdate} />

        </div>
    </div>
)

class Main extends Component {

    render() {
        return (
            <BrowserRouter>
                <BaseLayout />
            </BrowserRouter>
        );
    }
}
export default Main;