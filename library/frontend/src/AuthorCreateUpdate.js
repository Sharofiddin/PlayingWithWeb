import React, { Component } from 'react';
import AuthorsService from './AuthorsService';

const authorsService = new AuthorsService();

class AuthorCreateUpdate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCreate() {
        authorsService.createAuthor(
            {
                "first_name": this.refs.first_name.value,
                "last_name": this.refs.last_name.value,
            }).then((result) => {
                alert("Muallif qo'shild!");
            }).catch(() => {
                alert('Muallif qo\'shishda xatolik yuz berdi.');
            });
    }

    handleUpdate(pk) {
        authorsService.updateAuthor(
            {
                "id": pk,
                "first_name": this.refs.first_name.value,
                "last_name": this.refs.last_name.value,
            }
        ).then((result) => {
            console.log(result);
            alert("Muallif yangilandi!");
        }).catch(() => {
            alert('Muallifni yangilashda xatolik yuz berdi.');
        });
    }

    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.pk) {
            alert("updating");
            this.handleUpdate(params.pk);
        }
        else {
            alert("creating");
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
                        <input className="form-control col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6" type="text" ref="first_name"></input>
                    </div>
                    <div className="form-group">
                        <label>Familiyasi:</label>
                        <input className="form-control col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6" type="text" ref="last_name"></input>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Ok"></input>
                </div>
            </form>
        )
    }

}
export default AuthorCreateUpdate;