import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import "../../styles/header.css"
import SavedStatus from "../profile/SavedStatus"
const Header = ({ myinfo }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "90%", marginTop: "10vh" }}>
            <div style={{ justifyContent: "space-between", border: "1px solid grey", display: "flex", gap: "10vh" }}>
                <img style={{ width: "30vh", borderRadius: "50%", height: "30vh", paddingLeft: "10px", paddingTop: "10px" }} src={`${myinfo.profilePic}`} alt="" />
                <div>
                    <div style={{ height: "30px", display: "flex", gap: "20px", marginTop: "10px", alignItems: "center" }}>
                        <span style={{ fontSize: "30px" }}> {myinfo.username} </span>
                        <span className='buttons'> Edit Profile </span>
                        <span className='buttons'> View Archive </span>
                        <span><SettingsIcon /></span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px", alignContent: "center" }}>
                        <span> {myinfo.post} Posts</span>
                        <span> {myinfo.followers} followers</span>
                        <span> {myinfo.following} following</span>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <span>{myinfo.name}</span>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <p>
                            {myinfo.Bio}
                        </p>
                    </div>
                </div >
            </div >
            <div>
                <SavedStatus savedStatus={myinfo.savedStatus} />
            </div>
        </div>
    )
}

export default Header
