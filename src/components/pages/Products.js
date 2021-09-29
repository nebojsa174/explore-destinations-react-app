import React from "react";
import '../../App.css';
import video from '../../assets/videos/video-5.mp4';
import './Products.css';

export default function Products(){
    return (
        <div className='products_video'>
            <video src={video} autoPlay loop muted />
            <h1>Products soon...</h1>
        </div>
    );
}