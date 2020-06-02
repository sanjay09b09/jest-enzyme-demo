import React from 'react'
import {createPost} from '../post/postAction'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

class CreatePost extends React.Component{

    constructor() {
        super()
        this.emailValue = React.createRef();
        this.addPost = this.addPost.bind(this)
    }

    addPost() {
        console.log("Creating Post", this.emailValue.current.value)
        const id = Math.floor(Math.random() * 10) + 50;
        this.props.createPost({id,email:this.emailValue.current.value})
    }

    render() {
        return <div>
        <input type="text" ref={this.emailValue} name="email" ></input>
        <button onClick={this.addPost}>Create Post</button>
    </div>
    }

}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createPost }, dispatch)
}
const mapStateToProps = (state) =>{
    console.log("state,,u", state)
return {
    
}
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)