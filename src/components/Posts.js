import React from 'react'
import { connect } from 'react-redux'
import { Post } from './Post'

const Posts = ({syncPosts}) => {
    if(syncPosts===undefined){
    return <p className = "text-center">Постов пока нет</p>
    }
    else
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = state =>{
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)