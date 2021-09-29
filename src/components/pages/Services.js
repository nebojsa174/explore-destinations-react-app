import React from "react";
import '../../App.css';
import video from '../../assets/videos/video-4.mp4';
import './Services.css';

export default function Services() {
    return (
        <div className='services_video'>
            <video src={video} autoPlay loop muted />
            <h1>Services soon...</h1>
        </div>
    );
}