import { useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
function Feed({username}) {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const fetchPosts=async()=>{
const res= username?
await axios.get("posts/profile/"+username):
await axios.get("http://localhost:3000/post/timeline/63a260b97c7b7b45f453852a")
  setPosts(res.data)
    };
   fetchPosts();
  },[username])
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed