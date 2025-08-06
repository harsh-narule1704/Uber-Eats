import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h2>Name: AK</h2>
            <h3>Location: Dehradun</h3>
            <h3>Contact: @akshaymarch7</h3>
        </div>
    );
};

export default User;