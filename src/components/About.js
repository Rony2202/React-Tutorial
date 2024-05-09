import User from "./User";
import UserClass from "./UserClass";


const About =() => {
    return (
        <div>
            <h1>This is the About page</h1>
            <h2>React</h2>
            <User name = "Ronald (Function)"/>

            <UserClass name = "Ronald (Class)"/>
        </div>
    )
}
export default About;