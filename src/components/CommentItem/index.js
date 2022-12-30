import './index.css'

const CommentItem = props => {
  const {eachItem} = props
  const {Name, Comment, id, isLiked} = eachItem

  return (
    <div className="Item">
      <div className="heading">
        <p className="roundedCon">{Name[0]}</p>
        <p>{Name}</p>
      </div>
      <p>{Comment}</p>
      <div className="footer">
        <div className="flexxx">
          <img src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png" />
          <p>Like</p>
        </div>
        <div>
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </div>
      </div>
    </div>
  )
}

export default CommentItem
