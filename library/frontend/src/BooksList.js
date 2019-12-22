import  React, { Component } from  'react';
import BooksService from './BooksService';

const booksService = new BooksService();

class BooksList extends Component {
    constructor(props){
        super(props);
        this.state = {
            books : [],
            nextPagerl : ''
        };

        this.nextPage = this.nextPage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
componentDidMount() {
    var  self  =  this;
    booksService.getBooks().then(function (result) {
                self.setState({ books:  result, nextPageURL:  result.nextlink});
    });
}
handleDelete(e,pk){ 
    var  self  =  this; 
    booksService.deleteBook({pk :  pk}).then(()=>{
    var  newArr  =  self.state.customers.filter(function(obj) { 
            return  obj.pk  !==  pk;
        }); 
        self.setState({customers:  newArr})
    });
}

nextPage(){
    var  self  =  this;
    booksService.getBooksByURL(this.state.nextPageURL).then((result) => {
        self.setState({ books:  result.data, nextPageURL:  result.nextlink})
    });
}

render() {
    return (
    <div  className="table-reponsive">
        <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Nomi</th>
                <th>Muallifi</th>
                <th>Nashriyot</th>
                <th>Sahifalar soni</th>
                <th>Inventor raqami</th>
            </tr>
            </thead>
            <tbody>
                {this.state.books.map( b  =>
                <tr  key={b.id}>
                    <td>{b.id}  </td>
                    <td>{b.name}</td>
                    <td>{b.author.first_name + " " + b.author.last_name}</td>
                    <td>{b.publisher.name}</td>
                    <td>{b.page}</td>
                    <td>{b.inventor_number}</td>
                    <td>
                    <button  onClick={(e)=>  this.handleDelete(e,b.pk) }> Delete</button>
                    <a  href={"/book/" + b.pk}> Update</a>
                    </td>
                </tr>)}
            </tbody>
        </table>
        <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
    </div>
    );
}


}
export default BooksList;
