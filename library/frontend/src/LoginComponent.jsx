import React, { Component } from 'react'
import AuthenticationService from './service/AuthenticationService';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        //in28minutes,dummy
        // if(this.state.username==='in28minutes' && this.state.password==='dummy'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/courses`)
        //     //this.setState({showSuccessMessage:true})
        //     //this.setState({hasLoginFailed:false})
        // }
        // else {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // }

        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/books`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
            // AuthenticationService
        //     .executeJwtAuthenticationService(this.state.username, this.state.password)
        //     .then((response) => {
        //         AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
        //         this.props.history.push(`/courses`)
        //     }).catch(() => {
        //         this.setState({ showSuccessMessage: false })
        //         this.setState({ hasLoginFailed: true })
        //     })

    }


            render() {
                return (
                    <div>
                        <h1>Login</h1>
                        <div className="container">
                            {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                            {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                            <div className="card col-sm-6">
                                <div className="card-body">
                                    <div className="form-group col-sm-6">
                                        <label for="username">User Name: </label>
                                        <input type="text" name="username" id="login" value={this.state.username} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label for="password">Password: </label>
                                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                                    </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
        
        export default LoginComponent
        