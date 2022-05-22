import React from 'react'
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/profile_pic/yoda.jpg" alt="" className="shareProfileImg" />
                <input placeholder="Whats in your mind" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                    <span className='shareOptionText'>Photo/Video</span>
                </div>
                <div className="shareOptions">
                    <RoomIcon htmlColor="green" className="shareIcon"/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOptions">
                    <EmojiEmotionsIcon htmlColor="lightblue" className="shareIcon"/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>

        </div>
    </div>
  )
}
