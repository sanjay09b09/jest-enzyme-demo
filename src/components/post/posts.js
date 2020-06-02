import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from './postAction'
import { bindActionCreators } from 'redux'
import CreatePost from '../createPost'

class Posts extends React.Component {

    componentDidMount() {

        this.props.getPosts()

    }

    render() {
        const { posts } = this.props
        console.log("New posts", posts)
        return (
            <div>
            <CreatePost></CreatePost>
            {posts ? (<ul>

            {posts.map((ele)=>{
                return <li key={ele.id}>{ele.email}</li>
            })}

            </ul>): <div>No Posts Present</div>}
            </div>
        )
     
    
 

    }


}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPosts }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        posts: state.postReducer.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)