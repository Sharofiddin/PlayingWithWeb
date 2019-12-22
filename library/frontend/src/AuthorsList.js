import React, { Component } from 'react';
import AuthorsService from './AuthorsService'

const authorsService = new AuthorsService();

class AuthorsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            nextPagerl: ''
        };

        this.nextPage = this.nextPage.bind(this);
    }
    componentDidMount() {
        var self = this;
        authorsService.getAuthors().then(function (result) {
            self.setState({ authors: result, nextPageURL: result.nextlink });
        });
    }

    nextPage() {
        var self = this;
        authorsService.getAuthorByURL(this.state.nextPageURL).then((result) => {
            self.setState({ authors: result.data, nextPageURL: result.nextlink })
        });
    }

    render() {
        return (
            <div className="authors--list">
                <table className="table" width="100%" cellPadding="0" cellSpacing="0">
                    <thead key="thead">
                        <tr>
                            <th width="2%">#</th>
                            <th width="45%">Ismi</th>
                            <th width="42%">Familiyasi</th>
                            <th width="6%">O'zgartirish</th>
                            <th width="5%">O'chirish</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.authors.map(author =>
                            <tr key={author.id}>
                                <td>{author.id}</td>
                                <td>{author.first_name}</td>
                                <td>{author.last_name}</td>
                                <td><a className="btn btn-success" href={"/update_author"}>O'zgartirish</a></td>
                                <td><a className="btn btn-danger" href={"#"}>O'chirish</a></td>
                            </tr>)}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={this.nextPage}>Next</button>
            </div>
        );
    }


}
export default AuthorsList;
