import React, { Component } from 'react'
import {
    Card, Button
} from 'reactstrap';
import UserService from "../services/userService";
import Swal from 'sweetalert2'
import Navbar from './navbar'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            category1: "",
            amount: "",
            description: "",
            start: "",
            end: ""

        }
    }

    handleChange = (e) => {
        this.setState({

            [e.target.id]: e.target.value
        })
    }
    
   
    handleClickExpanse = () => {
        UserService.addExpanse(
            this.state.category1, this.state.amount, this.state.description)
            .then(
                response => {
                    console.log("success", response.data.message)
                    Swal.fire({
                        title: 'Category Added',
                        // text:response.data.message,
                        icon: 'success',
                        timer: 1000
                    })
                    this.setState({
                        category1: "",
                        amount: "",
                        description: ""

                    })
                },
                err => {
                    console.log("warning", err)
                    Swal.fire({
                        title: 'Oops...',
                        //text:err.response.data.message,
                        icon: 'error',
                    })
                }
            );
    }
    render() {
        return (
            <div>
            <Navbar/>
                <Card variant="outlined" style={{ maxWidth: "600px", margin:"auto" }} >
                    <h5 style={{ alignItems: "center" }}>Add Expanse</h5>
                    <hr />
                    <form className="col s12" >
                        <div className="row" >
                            <div className="input-field col s4 push-s3" >
                                <input id="category1" type="text" value={this.state.category1} onChange={this.handleChange}
                                    className="validate" />
                                <label htmlFor="category1">Category</label>
                            </div>
                            </div><div className="row" >
                            <div className="input-field col s4 push-s3" >
                                <input id="amount" type="number" value={this.state.amount} onChange={this.handleChange}
                                    className="validate" />
                                <label htmlFor="amount">Amount</label>
                            </div>
                            </div>
                            <div className="row" >
                            <div className="input-field col s4 push-s3" >
                                <input id="description" type="text" value={this.state.description} onChange={this.handleChange}
                                    className="validate" />
                                <label htmlFor="description">Description</label>
                            </div></div>
                            <div className="row" >
                            <div className="input-field col s5 push-s4">
                                <Button variant="contained" color="primary" onClick={this.handleClickExpanse}>ADD</Button>
                            </div>
                        </div>
                    </form>
                </Card> 
            </div>
        )
    }
}
