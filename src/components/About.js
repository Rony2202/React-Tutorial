import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";



class About extends Component {
    constructor(props){
        super(props)

        //console.log("parent constructor");
    }

       componentDidMount() {
        //console.log("parent component did mount");
       }     



    render() {

       //console.log("parent render");

        return (
            <div>
                <h1>About (class)</h1>
                <h1>This is the About page</h1>
                <h2>React</h2>
              
    
                <UserClass name = { "Ronald (Class)" } location= {"Thrissur (class)"}/>
            </div>
        );
    }
}


 
export default About;