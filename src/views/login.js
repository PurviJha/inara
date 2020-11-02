import React, { Component } from 'react'
import {
    Card, Button
} from 'reactstrap';
import { withRouter } from "react-router";
import Swal from 'sweetalert2'
import AuthService from '../services/authService'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleClick = () => {
        AuthService.login(this.state.email, this.state.password).then(
            () => {
                this.props.history.push('/category')
                window.location.reload();
            },
            err=>{
              Swal.fire({
                title: 'Oops...',
                text:err.response.data.message,
                icon:  'error',
              })
              
            }
          );
    }
    render() {
        return (
            <div>
                
                    <Card style={{ maxWidth: "500px", margin:"auto", marginTop: "150px",padding:"auto" }}>
                        <div className="row">
                            <form className="col s12" >

                                <div className="row" >
                                    <div className="input-field col s6 push-s3" >
                                        <input id="email" type="email" value={this.state.email} onChange={this.handleChange}
                                            className="validate" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6 push-s3 ">
                                        <input id="password" type="password" value={this.state.password} onChange={this.handleChange} className="validate" />
                                        <label htmlFor="password">Password</label>

                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <Button variant="contained" color="primary" onClick={this.handleClick}>Login</Button>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <p onClick={() => this.props.history.push("/register")}>Create new account</p>
                                </div>
                            </form>
                        </div>
                    </Card>
            </div>
        )
    }
}
export default withRouter(Login)