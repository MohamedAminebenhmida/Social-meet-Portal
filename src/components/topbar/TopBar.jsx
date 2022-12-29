import './topbar.css'
import { Chat, Notifications, Person, Search} from "@mui/icons-material";
import {Link} from 'react-router-dom'
function TopBar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none" }} >
<span className='logo'> AmineSocial</span></Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className='searchIcon'/>
<input placeholder='search for friends,posts or any videos' className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarlinks">
            <span className="topbarlink">Homepage</span>
            <span className="topbarlink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <div className="topbarIconBadge">1</div>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <div className="topbarIconBadge">2</div>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <div className="topbarIconBadge">1</div>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
        </div>
  )
}

export default TopBar