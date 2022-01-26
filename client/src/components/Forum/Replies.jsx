import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'

const Replies = ({postId}) => {
  const [replies, setReplies] = useState([])

  function fetchReplies() {
    axios
    .get(`/tierlist/posts/${postId}/replies`)
    .then(res => setReplies(res.data))
  }
  useEffect(() => {
    fetchReplies()
  }, [])

  return(
    <div className="repliesList">
      <div>
      {replies.map((reply) => (
        <div className="reply">
        <strong>Reply: </strong><span> {reply.reply_body}</span>
        <br />
        <span id="replyDetails"> by <i>{reply.user}</i> on <small>{moment(reply.date).format('LL')}</small></span>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Replies