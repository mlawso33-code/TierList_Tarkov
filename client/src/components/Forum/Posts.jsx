import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'


import Replies from './Replies.jsx'

const Posts = ({ post }) => {
  return (
    <div className="postsList">
      <div>
        <strong>Post: </strong> {post.forum_body}
      </div>
      <span id="postDetails">by <em>{post.user}</em> on <small>{moment(post.date).format('LL')}</small></span>
      <div>
        <Replies key={post.id} postId={post.id}/>
      </div>
    </div>
  )
}

export default Posts