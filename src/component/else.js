import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Else extends Component{
    render() {
        return (
            <div>
                <Link to="/home">to home</Link>
            </div>
        );
    }
}

export default Else ;