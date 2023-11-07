import React from 'react'
import "../../styles/status.css"
import { obj as statusObj } from "../../data/statusdata"
const Status = () => {
    return (
        <div className='statusContainer'>
            {
                statusObj.map(obj => {
                    return <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "10px", borderRadius: "50%" }}>
                        <img style={{ border: "3px solid pink", borderRadius: "50%" }} width="45px" height="45px"
                            src={`${obj.profilePic}`} alt='ProfilePic' />
                        <span>{obj.username}</span>
                    </div>
                })
            }
        </div>
    )
}

export default Status
