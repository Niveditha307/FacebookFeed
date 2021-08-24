import {Component} from "react"
 import FeedItem from "./FeedItem"
 import "./FacebookFeed.css"

let count = 0 

class FacebookFeed extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchInput : "",
            feedList : [],
            status : false
        }
    }
   
    //Adding Feed Item

    onAddFeed = event => {
        event.preventDefault()
        const {searchInput,feedList} = this.state 
        if(searchInput !== ""){
            count++ 
            const newFeed = {
                id : count,
                description : searchInput,
                nolikes : 0,
                created_date : new Date()
            }

            this.setState({feedList : [...feedList,newFeed],searchInput : ""})
        }
       
    }
    onChangeValue = (event) => {
        this.setState({
            searchInput : event.target.value
        })
       
    }

    //Deleting Feed item geeting the id from the Feeditem

    onDeleteFeed = id => {
        const {feedList} = this.state 
        const delteFeedData = feedList.filter(
            eachFeed => eachFeed.id !== id
        )
        this.setState({
            feedList : delteFeedData
        })
    }

    //Editing Feed item geeting the id from the feeditem

    onEditingFeed = (text,id) => {
        const {feedList} = this.state 
        if(text !== ""){
        this.setState({
            feedList: feedList.map(todo => {
              if (todo.id === id) {
                todo.description = text
              }
            
              return todo
            }),
       
        })
    }
        
    }

    render(){
        const {feedList} = this.state
       
        return(
           
            <div>
               <form onSubmit = {this.onAddFeed}>
                    <input type = "text" onChange = {this.onChangeValue}/>
                </form>
                <div className = "feed-container">
                <ul className = "feed-list-container">

                    {/* FeedItem component */}
                  
                    {feedList.reverse().map(eachFeed => (
                        <FeedItem  feedDetails = {eachFeed} key = {eachFeed.id}
                        onDeleteFeed = {this.onDeleteFeed}
                        onEditingFeed = {this.onEditingFeed}
                      

                        />
                    ))}
                </ul> </div>
             
              
               </div>


           
        )
    }
}
export default FacebookFeed