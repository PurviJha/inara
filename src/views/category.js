import React, { Component } from 'react'
import {
    Card, Button, CardTitle,
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
            end: "",
            categories:[]

        }
    }
    componentDidMount(){
        UserService.getCategory()
        .then(
            response => {
                console.log("success", response.data.categories)
                this.setState({
                    categories:response.data.categories
                })
            },
            err => {
                console.log("warning", err)
                
            }
        );
        
    }

    handleChange = (e) => {
        this.setState({

            [e.target.id]: e.target.value
        })
    }
    
    handleClickAdd = () => {
        UserService.addCategory(
            this.state.category)
            .then(
                response => {
                    console.log("success", response.data.message)
                    Swal.fire({
                        title: 'Category Added',
                        // text:response.data.message,
                        icon: 'success',
                        timer: 1500
                    })
                    this.setState({
                        category: ""
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
                            <h5 style={{ alignItems: "center" }}>Add Category</h5>
                            <hr />
                            <form className="col s12" >
                                <div className="row" >
                                    <div className="input-field col s6 push-s1" >
                                        <input id="category" type="text" value={this.state.category} onChange={this.handleChange}
                                            className="validate" />
                                        <label htmlFor="category">Category</label>
                                    </div>
                                    <div className="input-field col s5 push-s4">
                                        <Button variant="contained" color="primary" onClick={this.handleClickAdd}>ADD</Button>
                                    </div>
                                </div>
                            </form>
                           
                        </Card>
                        <Card variant="outlined" style={{ maxWidth: "600px", margin:"auto",padding:"50px" }} >
                            <CardTitle>Different categories</CardTitle>
                            <br/>
                            { 
                            this.state.categories.map(cat=>{
                                return(
                                    <li>{cat}</li>
                                    )
                                })
                            }
                        </Card>
                            
                        
            </div>
        )
    }
}
