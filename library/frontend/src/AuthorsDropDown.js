import React, { Component } from 'react';
import AuthorsService from './AuthorsService'

const authorsService = new AuthorsService();

class AuthorsDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],
        };
    }
    componentDidMount() {
        var self = this;
        authorsService.getAuthors().then(function (result) {
            self.setState({ authors: result});
        });
    }

    render() {
        return (
            <div className="form-group col-sm-4">
            <label>Muallif:</label>
            <select className="form-control" onChange={(ev) => this.props.onChange(ev.target.value)}>
            {this.state.authors.map( a  => 
                    <option key={a.id} value={a}>{a.first_name + ' '+a.last_name }
                    </option>)
            }
            </select>
            </div>
        );
    }


}
export default AuthorsDropDown;
