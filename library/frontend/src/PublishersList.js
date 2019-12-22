import React, { Component } from 'react';
import PublisherssService from './PublishersService'


const publishersService = new PublisherssService();

class PublishersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishers: [],
            nextPagerl: ''
        };

        this.nextPage = this.nextPage.bind(this);
    }
    componentDidMount() {
        var self = this;
        publishersService.getPublishers().then(function (result) {
            self.setState({ publishers: result, nextPageURL: result.nextlink });
        });
    }

    nextPage() {
        var self = this;
        publishersService.getPublisherByURL(this.state.nextPageURL).then((result) => {
            self.setState({ publishers: result.data, nextPageURL: result.nextlink })
        });
    }

    render() {
        return (
            <div className="publishers--list">
                <table className="table" width="100%" cellPadding="0" cellSpacing="0">
                    <thead key="thead">
                        <tr>
                            <th width="2%">#</th>
                            <th width="87%">Nomi</th>
                            <th width="6%">O'zgartirish</th>
                            <th width="5%">O'chirish</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.publishers.map(publisher =>
                            <tr key={publisher.id}>
                                <td>{publisher.id}  </td>
                                <td>{publisher.name}</td>
                                <td><a className="btn btn-success" href={"/publishers"}>O'zgartirish</a></td>
                                <td><a className="btn btn-danger" href={"#"}>O'chirish</a></td>
                            </tr>)}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={this.nextPage}>Next</button>
            </div>
        );
    }


}
export default PublishersList;