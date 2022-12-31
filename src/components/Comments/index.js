import {Component} from 'react'
import {v4 as uid} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', initalList: [], count: 0}

  inputCommentCd = event => {
    this.setState({comment: event.target.value})
  }

  inputNameCd = event => {
    this.setState({name: event.target.value})
  }

  likefun = id => {
    const {initalList} = this.state
    this.setState({
      initalList: initalList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    })
  }

  addNewItem = event => {
    event.preventDefault()
    const bgColor = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    console.log(bgColor)
    const {name, comment} = this.state
    this.setState(prevState => ({
      initalList: [
        ...prevState.initalList,
        {
          id: uid(),
          Name: name,
          Comment: comment,
          isLiked: false,
          time: new Date(),
          bgColor: initialContainerBackgroundClassNames[bgColor],
        },
      ],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  deleteComment = id => {
    const {initalList} = this.state
    console.log(initalList)
    this.setState(prevState => ({
      initalList: initalList.filter(eachItem => eachItem.id !== id),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {name, comment, count, initalList} = this.state

    console.log(initalList)
    return (
      <div className="mainDiv">
        <div className="uppperSec">
          <div className="form Con">
            <form className="leftCon" onSubmit={this.addNewItem}>
              <h1>Comments</h1>
              <p>Say Something about 4.0 Tech</p>
              <input
                type="text"
                className="Name"
                onChange={this.inputNameCd}
                value={name}
                placeholder="Your Name"
              />
              <textarea
                type="text"
                className="YourComment"
                onChange={this.inputCommentCd}
                value={comment}
                placeholder="Your Comment"
              />
              <div className="hi">
                <button type="submit">Add Comment</button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="spe" />
        <ul className="lowerCon">
          <p>{count} Comments</p>
          {initalList.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              eachItem={eachItem}
              likefun={this.likefun}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments

