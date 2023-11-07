import React from 'react'

const MyPost = ({ post }) => {
    return (
        <div>
            <div style={{ borderTop: "1px solid grey", marginTop: "5vh", padding: "2vh 0vh", textTransform: "uppercase", display: "flex", justifyContent: "center", gap: "5vh" }}>
                <span>Posts </span>
                <span>Reels</span>
                <span>Saved</span>
                <span>Tagged</span>
            </div>
            <div style={{ width: "60vh", display: "grid", gridTemplateColumns: "auto auto auto", columnGap: "2vh", rowgap: "2vh" }}>
                {post.map((ele) => {
                    return <img src={`${ele.postImages[0]}`} alt="" style={{
                        width: "300px", height: "300px", objectFit: "cover"
                    }} />
                })}
            </div>
        </div>
    )
}

export default MyPost
