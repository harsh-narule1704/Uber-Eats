import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>Namaste React Web Series</h2>
            {/* <User count={0} /> */}

            <UserClass  name={"Harry"} location={"Sangli"} mail={"trainy045@gmail"}/>
            <UserClass  name={"Ak"} location={"Dehradun"} mail={"aK045@gmail"}/>
        </div>
    );
}

export default About;


/* Lifecycle of Parent Child
    -Parent constructor
    -Parent render
        -Harry Constructor(child 1)
        -Harry Render (child 1)

        -Ak Constructor (child 2)
        -Ak Render (child 2)

        -Harry componentDidMount (child 1)

        -Ak componentDidMount (child 2)
    
    -Parent 
*/