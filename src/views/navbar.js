import React, { Component } from 'react'
import { withRouter } from "react-router";

 class Navbar extends Component {
    render() {
        return (
            <div>
                <nav style={{backgroundColor:"black",height:'150px',}}>
                    <div >
                        <a  className="brand-logo center">Welcome</a>
                        <br/>
                        <ul id="nav-mobile" className="brand-logo center">
                            <li ><a onClick={()=>this.props.history.push('./category')}>Category</a></li>
                            <li><a onClick={()=>this.props.history.push('./add-expanse')}>Add Expanse</a></li>
                            <li><a onClick={()=>this.props.history.push('./filter-expanse')}>See Expanse</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default withRouter(Navbar)