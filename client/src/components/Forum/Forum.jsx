import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Posts from './Posts.jsx'

const Forum = () => {
  const [posts, setPosts] = useState([])

  function fetchPosts() {
    axios
    .get('/tierlist/posts')
    .then(res => setPosts(res.data))
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  return(
    <div className="forumList">
      <h3>Forum</h3>
      <div>
      {posts.map((post) => (
        <Posts key={post.id} post={post}/>
      ))}
      </div>
    </div>
  )
}

export default Forum