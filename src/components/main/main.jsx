import React from 'react'
import "./main.css";
import { assets } from '../../assets/assets';
export const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Nitesh</span></p>
                <p>How Can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest Me a Horrow Movie</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest Me a Action Movie</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest Me a Recepie to make laddu</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Create a image for me</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" name="" id="" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    This is a Gemini Clone Design & Developed By Nitesh Sharma.
                </p>
            </div>
        </div>
    </div>
  )
}
