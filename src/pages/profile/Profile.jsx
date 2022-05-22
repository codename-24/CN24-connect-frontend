import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'
export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
        <div className="profileCover">
        <img src="/assets/posts/dawki.jpg" alt="" className="profileCoverImg" />
        <img src="/assets/profile_pic/yoda.jpg" alt="" className="profileUserImg" />
        </div>
        <div className="profileInfo">
            <h4 className='profileInfoName'>Yoda</h4>
            <span className="profileInfoDesc">Hello</span>
        </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>
        </div>
    </div>
    </div>
    
    </>
  )
}
