import {Component} from 'react'
import {v4 as uid} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
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

  addNewItem = event => {
    event.preventDefault()
    const {name, comment} = this.state
    this.setState(prevState => ({
      initalList: [
        ...prevState.initalList,
        {id: uid(), Name: name, Comment: comment, isLiked: false},
      ],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {name, comment, count, initalList} = this.state
    console.log(name)
    return (
      <div className="mainDiv">
        <div className="uppperSec">
          <div className="form Con">
            <form className="leftCon" onSubmit={this.addNewItem}>
              <h1>Comments</h1>
              <p>Say somthing about 4.0 Technologies</p>
              <input
                type="text"
                className="Name"
                onChange={this.inputNameCd}
                value={name}
              />
              <textarea
                type="text"
                className="YourComment"
                onChange={this.inputCommentCd}
                value={comment}
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
        <div className="lowerCon">
          <p>{count} Comments</p>
          {initalList.map(eachItem => (
            <CommentItem eachItem={eachItem} />
          ))}
        </div>
      </div>
    )
  }
}

export default Comments
