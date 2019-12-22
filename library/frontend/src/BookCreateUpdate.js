import React, {Component} from 'react';
import BookService from './BooksService';
import AuthorService from './AuthorsService'
import PublisherSevice from './PublishersService'

const bookService = new BookService();
const authorSevice = new AuthorService();
const publisherService = new PublisherSevice();

class BookCreateUpdate  extends Component{
    constructor(props){
        super(props);
        this.state = {
            authors :[],
            publishers:[]
        };
        var  self  =  this;
        let authorsRes = authorSevice.getAuthors();
        let publishersRes = publisherService.getPublishers();
        self.state.authors = authorsRes;
        self.state.publishers = publishersRes;
        console.log(self.state.authors);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleCreate(){
    bookService.createBook(
        {
        "name":  this.refs.name.value,
        "author":  this.refs.author.id.value,
        "publisher":  this.refs.publisher.id.value,
        "pages":  this.refs.pages.value,
        "description":  this.refs.description.value
        }).then((result)=>{
                alert("Kitob qo'shild!");
        }).catch(()=>{
                alert('Kitob qo\'shishda xatolik yuz berdi.');
        });
}

handleUpdate(pk){
    bookService.updateBook(
      {
        "pk": pk,
        "name": this.refs.name.value,
        "author": this.refs.author.value,
        "publisher": this.refs.publisher.value,
        "pages": this.refs.pages.value,
        "description": this.refs.description.value
    }          
    ).then((result)=>{
      console.log(result);
      alert("Kitob yangilandi!");
    }).catch(()=>{
      alert('Kitobni yangilashda xatolik yuz berdi.');
    });
  }

  handleSubmit(event) {
    const { match: { params } } =  this.props;
    if(params  &&  params.pk){
        alert("updating");
        this.handleUpdate(params.pk);
    }
    else
    {
        alert("creating");
        this.handleCreate();
    }
    event.preventDefault();
}

render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <div className="form-group">
                    <label>Nomi:</label>
                    <input className="form-control col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6" type="text" ref="name"></input>
                </div>
                <div className="form-group">
                    <label>Muallif:</label>
                    <select className="form-control" ref="author">
                   {this.state.authors.map( a  => 
                        <option key={a.id} value={a}>{a.first_name + ' '+a.last_name }
                        </option>)
                    }       
                    </select>
                </div>
                <div className="form-group">
                    <label>Nashriyot:</label>
                    <select className="form-control" ref="publisher">
                    {this.state.publishers.map( p  => 
                        <option key={p.id} value={p}>{p.name}
                        </option>)}
                        {/* {this.buildPublisherOptions()} */}
                    </select>
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

buildAuthorOptions() {
    var arr = [];
    console.log(this.state.authors.length);
    for (let i = 1; i < this.state.authors.length; i++) {
        arr.push(<option key={this.state.authors[i].id} value={this.state.authors[i]}>{this.state.authors[i].first_name + ' '+this.state.authors[i].last_name }</option>)
    }
    console.log(arr);
    return arr; 
}

buildPublisherOptions() {
    var arr = [];
    console.log(this.state.publishers.length);
    for (let i = 1; i < this.state.publishers.length; i++) {
        arr.push(<option key={this.state.publishers[i].id} value={this.state.publishers[i]}>{this.state.publishers[i].name}</option>)
    }
    console.log(arr);
    return arr; 
}


}
export default BookCreateUpdate;

