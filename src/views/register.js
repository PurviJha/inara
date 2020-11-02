import React, { Component } from 'react'
import {
    Card, Button,
} from 'reactstrap';
import { withRouter } from "react-router";
import Swal from 'sweetalert2'
import AuthService from '../services/authService'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleClick=()=>{
        AuthService.register(
            this.state.username,
            this.state.email,
            this.state.password,
            
          ).then(
            response => {
                this.props.history.push("/")
                console.log("success",response.data.message)
                Swal.fire({
                  title: 'User Created',
                  text:response.data.message,
                  icon: 'success',
                  timer:1000
                })
            },
            err=>{
                console.log("warning",err.response)
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
            <div >
                
                <Card style={{ maxWidth: "500px",  margin:"auto", marginTop: "150px" }}>
                    <div className="row">
                        <form className="col s12" >
                            <div className="row" >
                                <div className="input-field col s6 push-s3" >
                                    <input id="username" type="text" value={this.state.username} onChange={this.handleChange}
                                        className="validate" />
                                    <label htmlFor="username">Username</label>
                                </div>
                            </div>

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
                           <div style={{textAlign: 'center' }}>
                               <Button  variant="contained" color="primary" onClick={this.handleClick}>Signup</Button>
                           </div>
                            <div style={{ textAlign: 'center' }}>
                                <p onClick={() => this.props.history.push("/")}>Already have a account? Login</p>
                            </div>
                        </form>
                    </div>
                </Card>                
            </div>
        )
    }
}
export default withRouter(Register)