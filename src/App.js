import React from "react";
import Login from './components/Login'
import "./styles/app.css"
import Register from "./components/Register";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
function App() {
    return (
        <div className="App">
            {/* <div>
                <Login />
            </div>
            <div style={{ height: "100vh", display: 'flex', alignItem: 'center' }}>
                <Register />
            </div>
            <div>
                <Home />
            </div> */}
            <Profile />
        </div >
    )
}

export default App