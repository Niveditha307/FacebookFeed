
import {Component} from "react"

import "./FacebookFeed.css"


class FeedItem extends Component {

    state = {
        likes : 0 ,
        dislikes : 0,
        eidtStatus : false,
        editText : ""
    }

    onLiking = () => {
        this.setState(prevState => ({
            likes : prevState.likes+1
        }))
    }
    onDisliking = () => {
        this.setState(prevState => ({
            dislikes : prevState.dislikes+1
        }))
    }
    onEditValue = event => {
        this.setState({
            editText  : event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault()
       
        
        

    }

  

    render(){
        const {feedDetails  ,onDeleteFeed,onEditingFeed} = this.props
        const {id,description,created_date} = feedDetails
        const {likes,dislikes,eidtStatus,editText} = this.state

      const  onDeleteFeedItem = () => {
            onDeleteFeed(id)
        }
    
        const onEdit = () => {
            
            this.setState(prevState => ({
                eidtStatus : !prevState.eidtStatus
            }))
            onEditingFeed(editText,id)
           
        }
    

    return(
        <li className = "list-item">
        <div>
          <p>{description}</p> 
          <p>{created_date.toLocaleDateString()}</p>
          </div>
        <div className = "like-button-container">
          <button type = "button" onClick = {this.onLiking}>Like</button>
          <p>likes : {likes}</p>
          </div>

          <div className = "dislike-button-container">
          <button type = "button" onClick = {this.onDisliking}>DisLike</button>
          <p>dislikes : {dislikes}</p>
          </div>

          <div>
              <button type = "button" onClick= {onDeleteFeedItem}>
                  Delete
              </button>
          </div>
          <div>
              <button type = "button" onClick = {onEdit}>Edit</button>
              {eidtStatus && <form onSubmit = {this.onSubmit}><input type = "text" onChange = {this.onEditValue}/></form>}
          </div>
        
        </li>
    )
}
}

export default FeedItem