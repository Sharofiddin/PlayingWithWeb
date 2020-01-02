import React, { Component } from "react";
import BookService from "./BooksService";
import AuthorsDropDown from "./AuthorsDropDown";
import PublishersDropDown from "./PublishersDropDown";
const bookService = new BookService();


class BookCreateUpdate extends Component {


  constructor(props) {
    super(props);

    this.state = {
      author:{id:null},
      publisher:{id:null}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangePublisher = this.onChangePublisher.bind(this);
  }

    onChangeAuthor(new_author_id){
      this.setState({author:{id:new_author_id}});
    }

    onChangePublisher(new_publisher_id){
      this.setState({publisher:{id:new_publisher_id}});
    }

  handleCreate() {
    alert(this.state.author.id);
    bookService
      .createBook({
        name: this.refs.name.value,
        author: this.state.author,
        publisher: this.state.publisher,
        page: this.refs.pages.value,
        inventor_number: this.refs.inventor_number.value,
        description: this.refs.description.value
      })
      .then(result => {
        alert("Kitob qo'shild!");
      })
      .catch(() => {
        alert("Kitob qo'shishda xatolik yuz berdi.");
      });
  }

  handleUpdate(pk) {
    bookService
      .updateBook({
        pk: pk,
        name: this.refs.name.value,
        author: this.refs.author,
        publisher: this.refs.publisher,
        pages: this.refs.pages.value,
        description: this.refs.description.value
      })
      .then(result => {
        console.log(result);
        alert("Kitob yangilandi!");
      })
      .catch(() => {
        alert("Kitobni yangilashda xatolik yuz berdi.");
      });
  }

  handleSubmit(event) {
    const {
      match: { params }
    } = this.props;
    if (params && params.pk) {
      this.handleUpdate(params.pk);
    } else {
      this.handleCreate();
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group  col-sm-8">
              <label>Nomi:</label>
              <input
                className="form-control"
                type="text"
                ref="name"/>
            </div>
          </div>
          <div className="row">
            <AuthorsDropDown onChange={this.onChangeAuthor}/>
            <PublishersDropDown onChange={this.onChangePublisher}/>
          </div>
          <div className="row">
            <div className="form-group col-sm-4">
              <label>Sahifalar soni:</label>
              <input
                className="form-control"
                type="number"
                ref="pages"/>
            </div>
            <div className="form-group  col-sm-4">
              <label>Invertor raqami:</label>
              <input
                className="form-control"
                type="text"
                ref="inventor_number"/>
             </div>
             </div>
            <div className="row">
              <div className="form-group col-sm-4">
                <label>Qisqacha ma'lumot:</label>
                <textarea
                  className="form-control"
                  ref="description"/>
              </div>
            </div>
            <input className="btn btn-primary" type="submit" value="ok"/>
      </form>
    );
  }
  
}
export default BookCreateUpdate;
