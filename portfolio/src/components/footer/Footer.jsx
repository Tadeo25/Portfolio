import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-info">
                    <h1>Your name</h1>
                    <p>Based in your city</p>
                </div>
                <div className="footer-contact">
                    <h3>Contact me</h3>
                    <p>And let's get down to work</p>
                </div>
                <div className="footer-sns">
                    <div className="design-by">
                         Design by your name
                    </div>
                    <div className="sns-links">
                        <a href="" target="_blank">
                            <i className="fab fa-linkedin linkedin"></i>
                        </a>
                        <a href="" target="_blank">
                            <i className="fab fa-instagram instagram"></i>
                        </a>                    
                         <a href="" target="_blank">
                            <i className="fab fa-whatsapp whatsapp"></i>
                        </a>

                    </div>

                </div>
            </footer>
        </div>
    )
}
