import React from "react";
import "../styles/login.css"
const App = () => {
    return (
        <div className="loginContainer">
            <h3>Login</h3>
           <div>
            <input type="email" name="email" placeholder="Enter Your Email " />
           </div>
           <div>
            <input type="password" name="password" placeholder="Enter Your Password "/>
           </div>
           <button>Login</button>
           <button className="link">Want to Register ?</button>
        </div>
    )
}

export default App