import React, {Component} from 'react';
import HomePage from './HomePage'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: '', isAuthenticated: false, open: false};
    }

    render() {    
        if (this.state.isAuthenticated === true) {    
            return (< HomePage/>)    
        }    
        else {    
            return (    
                <div id="login">    
                    <h3 className="text-center text-white pt-5">Login form</h3>    
                    <div className="container">    
                        <div id="login-row" className="row justify-content-center align-items-center">    
                        <div id="login-column" className="col-md-6">    
                         <div id="login-box" className="col-md-12">    
                        <div className="form-group">    
                            <input type="text" name="login" onChange={this.handleChange}  className="form-control" placeholder="login" />    
                        </div>    
                        <div className="form-group">    
                            <input type="password" name="password" onChange={this.handleChange}  className="form-control" placeholder="password" />    
                        </div>    
                             <input type="submit" name="submit" onClick={this.login}  className="btn btn-info btn-md" value="Kirish"/>    
                         </div>    
                        </div>    
                        </div>    
                </div>    
                </div>    
        
     );} }  

     handleChange = (event) => {    
        this.setState({[event.target.name] : event.target.value});    
    }  

    login = () => {    
        const user = {login: this.state.login, password: this.state.password}; 
        fetch("http://localhost:8080/api/login", {    
            method: 'POST',    
            body: JSON.stringify(user)    
        })    
            .then(res => {    
                const jwtToken = res.headers.get('Authorization');    
                if (jwtToken !== null) {    
                    sessionStorage.setItem("jwt", jwtToken);    
                    this.setState({isAuthenticated: true});    
                }    
                else {    
                    this.setState({open: true});    
                }    
            })    
            .catch(err => console.error(err))    
    };  
}

export default Login; 