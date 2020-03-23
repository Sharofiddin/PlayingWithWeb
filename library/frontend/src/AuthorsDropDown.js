import React, { Component } from 'react';

class AuthorsDropDown extends Component {
 
    render() {
        return (
            <div className="form-group col-sm-4">
            <label>Muallif:</label>
            <select className="form-control" onChange={(ev) => this.props.onChange(ev.target.value)}>
            {this.props.authors.map( a  => 
                    <option key={a.id} value={a.id}>{a.first_name + ' '+a.last_name }
                    </option>)
            }
            </select>
            </div>
        );
    }


}
export default AuthorsDropDown;
