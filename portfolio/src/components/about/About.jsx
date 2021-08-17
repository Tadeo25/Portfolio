import React from 'react'
import './About.css';
export default function About() {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you about me</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                   Commodi numquam explicabo repellat in totam quo, voluptatibus aperiam et libero, ab ea aspernatur cum earum? 
                   Adipisci expedita quidem quae corporis nesciunt.</p>
            </div>
            <div className="about-img">
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt="" />
            </div>
        </div>
    )
}
