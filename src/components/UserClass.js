import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInfo: {
                name: "",
                location: ""
            }
        };
    }

    async componentDidMount() {
        // API Calls
        const data = await fetch("https://api.github.com/users/harsh-narule1704");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);
    }
    render(){
        const {name, location} = this.state.userInfo;
        
        return(
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: +91 7972755392</h4>
                
            </div>
        );
    }
}

export default UserClass;