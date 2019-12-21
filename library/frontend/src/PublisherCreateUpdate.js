import React, { Component } from 'react';
import PublishersService from './PublishersService'

const publishersService = new PublishersService();

class PublisherCreateUpdate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCreate() {
        publishersService.createPublisher(
            {
                "name": this.refs.name.value,
            }).then((result) => {
                alert("Nashriyot qo'shild!");
            }).catch(() => {
                alert('Nashriyot qo\'shishda xatolik yuz berdi.');
            });
    }

    handleUpdate(pk) {
        publishersService.updatePublisher(
            {
                "id": pk,
                "name": this.refs.name.value,

            }
        ).then((result) => {
            console.log(result);
            alert("Nashroyot yangilandi!");
        }).catch(() => {
            alert('Nashriyot yangilashda xatolik yuz berdi.');
        });
    }

    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.pk) {
            this.handleUpdate(params.pk);
        }
        else {
            this.handleCreate();
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="form-group">
                        <label>Ismi:</label>
                        <input className="form-control col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6" type="text" ref="name"></input>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Ok"></input>
                </div>
            </form>
        )
    }

}
export default PublisherCreateUpdate;