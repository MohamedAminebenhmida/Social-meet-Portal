import TopBar from "../../components/topbar/TopBar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rigthbar/Rigthbar"
import './profile.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  console.log(username);
  useEffect(()=>{
    const fetchPosts=async()=>{
const res= await axios.get(`/users?username=john`)
  setUser(res.data)
  console.log(res);
    };
   fetchPosts();
  },[])
  return (
    <>
    <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}/post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}/person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile