import React, { Component } from 'react';
import PublisherssService from './PublishersService'


const publishersService = new PublisherssService();

class PublishersDropDown extends Component {
    
    componentDidMount() {
        var self = this;
        publishersService.getPublishers().then(function (result) {
            self.setState({ publishers: result});
        });
    }

    render() {
        return (
            <div className="form-group col-sm-4">
            <label>Nashriyot:</label>
            <select className="form-control" onChange={(ev) => this.props.onChange(ev.target.value)}>
            {this.props.publishers.map( p  => 
                        <option key={p.id} value={p.id}>{p.name}
                        </option>)}
            </select>
            </div>
        );
    }


}
export default PublishersDropDown;