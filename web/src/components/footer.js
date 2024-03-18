import React from "react";
import Logo from "../assets/CocoScanwhite.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper" style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#3AB54B',
            padding: '30px',
            boxSizing: 'border-box',
            width: '100%',
        }}>
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="" style={{ textAlign: 'center', color: 'white' }}>
                ©2024, All right reserved
            </div>
            <div className="footer-section-three" style={{ display: 'flex' }}>
                <div style={{ marginRight: '10px', color: 'white' }}><BsTwitter /></div>
                <div style={{ marginRight: '10px', color: 'white' }}><SiLinkedin /></div>
                <div style={{ marginRight: '10px', color: 'white' }}><BsYoutube /></div>
                <div style={{ marginRight: '10px', color: 'white' }}><FaFacebookF /></div>
            </div>
        </div>
    );
};

export default Footer;