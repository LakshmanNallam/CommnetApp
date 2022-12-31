import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachItem, likefun, deleteComment} = props
  const {Name, Comment, id, isLiked, time, bgColor} = eachItem

  console.log(bgColor)
  const deleteeFunall = () => {
    deleteComment(id)
  }

  const likecall = () => {
    likefun(id)
  }

  return (
    <li className="Item">
      <div className="heading">
        <p className={`roundedCon ${bgColor}`}>{Name[0].toUpperCase()}</p>
        <p>{Name}</p>
        <p>{formatDistanceToNow(time)}</p>
      </div>
      <p>{Comment}</p>
      <div className="footer">
        <div className="flexxx">
          <button type="button" onClick={likecall}>
            {isLiked ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="liked"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
              />
            )}
          </button>
          <p>{isLiked ? 'Liked' : 'Like'}</p>
        </div>
        <div>
          <button
            type="button"
            onClick={deleteeFunall}
            testid="delete"
            alt="delete"
          >
            {' '}
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
