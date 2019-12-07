import  React, { Component } from  'react';
import AuthorsService from './AuthorsService'

const authorsService = new AuthorsService();

class AuthorsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            authors : [],
            nextPagerl : ''
        };

        this.nextPage = this.nextPage.bind(this);
    }
componentDidMount() {
    var  self  =  this;
    authorsService.getAuthors().then(function (result) {
                self.setState({ authors:  result, nextPageURL:  result.nextlink});
    });
}

nextPage(){
    var  self  =  this;
    authorsService.getAuthorByURL(this.state.nextPageURL).then((result) => {
        self.setState({ authors:  result.data, nextPageURL:  result.nextlink})
    });
}

render() {
    return (
    <div  className="authors--list">
        <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Ismi</th>
                <th>Familiyasi</th>
            </tr>
            </thead>
            <tbody>
                {this.state.authors.map( author  =>
                <tr  key={author.id}>
                    <td>{author.id}  </td>
                    <td>{author.first_name}</td>
                    <td>{author.last_name}</td>
                </tr>)}
            </tbody>
        </table>
        <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
    </div>
    );
}


}
export default AuthorsList;
