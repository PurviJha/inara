import React, { Component } from 'react'
import {
    Card, Button,
} from 'reactstrap';
import UserService from "../services/userService";
import Navbar from './navbar'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            start: "",
            end: "",
            data:[]

        }
    }

    handleChange = (e) => {
        this.setState({

            [e.target.id]: e.target.value
        })
    }
    filterexpanse = () => {
        UserService.getfilterexpanse(
            this.state.start, this.state.end)
            .then(
                response => {
                    console.log("success", response)

                    this.setState({
                        start: "",
                        end: ""
                    })
                },
                err => {
                    console.log("warning", err)
                }
            );

    }
    filterexpansecategory = () => {
        UserService.getfilterexpansecategory(
            this.state.category)
            .then(
                response => {
                    console.log("success", response)
                    this.setState({
                        data:response.data
                    })
                    
                },
                err => {
                    console.log("warning", err)
                }
            );

    }

    render() {
        return (
            <div>
                <Navbar/>
                        <Card variant="outlined" style={{ maxWidth: "600px",margin:"auto"}}>
                            <h5 style={{ alignItems: "center" }}>Filter your Expanse</h5>
                            <hr />
                            <form className="col s12" style={{ marginLeft: "40px" }}>
                                <div className="row">
                                    <div className="input-field col s4">
                                        <input id="start" type="date" value={this.state.start} onChange={(this.handleChange)}
                                            className="validate" />
                                        <label htmlFor="end">Start</label>
                                    </div>
                                    <div className="input-field col s4 " >
                                        <input id="end" type="date" value={this.state.end} onChange={this.handleChange}
                                            className="validate" />
                                        <label htmlFor="end">End</label>
                                    </div>

                                    <div className="input-field col s4 " >
                                        <Button variant="contained" color="primary" onClick={this.filterexpanse}>Filter</Button>
                                    </div>
                                </div>

                            </form>
                        </Card>
                        <Card variant="outlined" style={{ maxWidth: "600px",margin:"auto"}}>
                        <h5 style={{ alignItems: "center" }}>Filter your Expanse by category</h5>
                            <hr />
                            <form className="col s12" style={{ marginLeft: "40px" }}>
                                <div className="row">
                                    <div className="input-field col s4">
                                        <input id="category" type="text" value={this.state.category} onChange={(this.handleChange)}
                                            className="validate" />
                                        <label htmlFor="category">Category Name</label>
                                    </div>

                                    <div className="input-field col s4 push-s4 " >
                                        <Button variant="contained" color="primary" onClick={this.filterexpansecategory}>Filter</Button>
                                    </div>
                                </div>

                            </form>
                            <hr/>
                            {
                                this.state.data.map((val,i)=>{
                                    return(
                                        <div style={{paddingLeft:"50px"}}>
                                            <p>Amount----<b>{val.amount} </b></p>
                                             <p>{val.description}</p>
                                        </div>
                                    
                                    )
                                })
                            }

                        </Card>
                
               
            </div>
        )
    }
}
