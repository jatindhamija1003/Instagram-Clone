import React from "react";
import "../../styles/SideBar.css";
const SideBar = () => {
    return (
        <div className="sidebarContainer">
            <ul>
                <li style={{ marginbottom: "20px" }}>
                    <img
                        width="150px" height="50px"
                        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
                        alt=""
                    />
                </li>
                <li>Home</li>
                <li>Search</li>
                <li>Explore</li>
                <li>Reels</li>
                <li>Messages</li>
                <li>Notification</li>
                <li>Create</li>
                <li>Profile</li>
            </ul>
        </div >
    );
};

export default SideBar;
