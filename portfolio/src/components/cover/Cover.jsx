import React from 'react'
import "./Cover.css"
import coverVideo from "../../media/videoCover2.mp4"

export default function Cover() {
    return (
        <>
        <div className="cover-container">

            <video className="video" 
            src={coverVideo} 
            autoplay 
            loop 
            muted>
            </video>
            <h1>Tadeo Mocoroa</h1>
            <p>Developer Jr | Video editor | Emprendedor | Content Creator</p>

        </div>
            
        </>
    )
}
