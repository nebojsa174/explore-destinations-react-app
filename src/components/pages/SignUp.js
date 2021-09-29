import React from "react";
import '../../App.css';
import video from '../../assets/videos/video-3.mp4';
import './SignUp.css';

export default function SignUp() {
    return(
        <div className='sign__up'>
            <video src={video} autoPlay loop muted />
            <h1>Sign up soon...</h1>
        </div>
    );
}