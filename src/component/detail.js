import React, {Component} from "react";
import jin from "../img/jin.png";

class Detail extends Component{
    render() {
        return (
             <div>
                 detail render test
                 <img src={jin}></img>
             </div>
        );
    }
}

export default Detail;