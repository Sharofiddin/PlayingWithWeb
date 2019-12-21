import React, { Component } from 'react';
import BookService from './BooksService';

const bookService = new BookService()

class BookCreateUpdate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCreate() {
        bookService.createBook(
            {
                "name": this.refs.name.value,
                "author": this.refs.author.value,
                "publisher": this.refs.publisher.value,
                "pages": this.refs.pages.value,
                "description": this.refs.description.value
            }).then((result) => {
                alert("Kitob qo'shild!");
            }).catch(() => {
                alert('Kitob qo\'shishda xatolik yuz berdi.');
            });
    }

    handleUpdate(pk) {
        bookService.updateBook(
            {
                "pk": pk,
                "name": this.refs.name.value,
                "author": this.refs.author.value,
                "publisher": this.refs.publisher.value,
                "pages": this.refs.pages.value,
                "description": this.refs.description.value
            }
        ).then((result) => {
            console.log(result);
            alert("Kitob yangilandi!");
        }).catch(() => {
            alert('Kitobni yangilashda xatolik yuz berdi.');
        });
    }

    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.pk) {
            alert("updating");
            this.handleUpdate(params.pk);
        }
        else {
            alert("creating");
            this.handleCreate();
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="form-group">
                        <label>Nomi:</label>
                        <input className="form-control col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6" type="text" ref="name"></input>
                    </div>
                    <div className="form-group">
                        <label>Muallif:</label>
                        <input className="form-control col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6" type="text" ref="author"></input>
                    </div>
                    <div className="form-group">
                        <label>Nashriyot:</label>
                        <input className="form-control col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6" type="text" ref="publisher"></input>
                    </div>
                    <div className="form-group">
                        <label>Sahifalar soni:</label>
                        <input className="form-control col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6" type="number" ref="pages"></input>
                    </div>
                    <div className="form-group">
                        <label>Qisqacha ma'lumot:</label>
                        <textarea className="form-control col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6" ref="description"></textarea>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Ok"></input>
                </div>
            </form>
        )
    }

}
export default BookCreateUpdate;