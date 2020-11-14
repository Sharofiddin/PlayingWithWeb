import React, { Component } from 'react';
import BooksService from '../service/BooksService';

const booksService = new BooksService();

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            nextPageURL: ''
        };

        this.nextPage = this.nextPage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

componentDidMount() {
        var self = this;
        booksService.getBooks().then(function (result) {
            if(result !== undefined)
            self.setState({ books: result, nextPageURL: result.nextlink });
        });
    }
handleDelete(e, pk) {
        var self = this;
        booksService.deleteBook({ pk: pk }).then(() => {
            var newArr = self.state.customers.filter(function (obj) {
                return obj.pk !== pk;
            });
            self.setState({ customers: newArr })
        });
    }
nextPage() {
        var self = this;
        booksService.getBooksByURL(this.state.nextPageURL).then((result) => {
            self.setState({ books: result.data, nextPageURL: result.nextlink })
        });
    }

    render() {
        return (
            <main>
                <table className="table" width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <thead key="thead">
                        <tr>
                            <th width="2%">#</th>
                            <th width="20%">Nomi</th>
                            <th width="27%">Muallifi</th>
                            <th width="20%">Nashriyot</th>
                            <th width="10%">Sahifalar soni</th>
                            <th width="10%">Inventor raqami</th>
                            <th width="6%">O'zgartirish</th>
                            <th width="5%">O'chirish</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map(b =>
                            <tr key={b.id}>
                                <td>{b.id}  </td>
                                <td>{b.name}</td>
                                <td>{b.author.first_name + " " + b.author.last_name}</td>
                                <td>{b.publisher.name}</td>
                                <td>{b.page}</td>
                                <td>{b.inventor_number}</td>
                                <td><a className="btn btn-success" href={"/book/" + b.pk}>O'zgartirish</a></td>
                                <td><button className="btn btn-danger" onClick={(e) => this.handleDelete(e, b.pk)}>O'chirish</button></td>
                            </tr>)}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={this.nextPage}>Next</button>
                </main>
        );
    }
}
export default BooksList;