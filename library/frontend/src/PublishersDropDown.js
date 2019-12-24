import React, { Component } from 'react';
import PublisherssService from './PublishersService'


const publishersService = new PublisherssService();

class PublishersDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishers: []
        };

        this.nextPage = this.nextPage.bind(this);
    }
    componentDidMount() {
        var self = this;
        publishersService.getPublishers().then(function (result) {
            self.setState({ publishers: result});
        });
    }

    nextPage() {
        var self = this;
        publishersService.getPublisherByURL(this.state.nextPageURL).then((result) => {
            self.setState({ publishers: result.data})
        });
    }

    render() {
        return (
            <div className="form-group col-sm-4">
            <label>Nashriyot:</label>
            <select className="form-control" ref="publisher">
            {this.state.publishers.map( p  => 
                        <option key={p.id} value={p}>{p.name}
                        </option>)}
            </select>
            </div>
        );
    }


}
export default PublishersDropDown;