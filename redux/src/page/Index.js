import React, { Component } from 'react';
import { Link , Redirect } from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.props.history.push("/home/");  
    }
    render() { 
        <Redirect to="/home/" />
        return (  <h2>JSPang.com</h2> );
    }
}

export default Index;