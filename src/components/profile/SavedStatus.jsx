import React from 'react'

const SavedStatus = ({ savedStatus }) => {
    return (
        <div style={{ display: "flex", gap: "10vh", marginLeft: "10vh", marginTop: "2vh" }}>
            {savedStatus.map((status) => {
                return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <img src={`${status.status[0]}`} style={{ width: '10vh', height: "10vh", borderRadius: "50%" }} />
                    <span>{status.statusName}</span>
                </div>
            })}
        </div>
    )
}

export default SavedStatus
