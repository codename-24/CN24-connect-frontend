import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="/assets/birthday.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Grogu</b> and <b>3 other friends</b> have their birthday today</span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}

        </ul>


      </>
    )

  }
  const ProfileRightbar = () =>{
    return(
      <>
      <h4 className="rightbarTitle"> User Information</h4>
      <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Dagobah</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">896 BBY</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship Status:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>

      </div>
      <h4 className="rightbarTitle">Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/profile_pic/daenerys.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Daenerys Targareyan</span>
        </div>
      </div>

      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}

      </div>
    </div>
  )
}