import React from 'react'
import { fetchPosts } from '../redux/actions'
import { Post } from './Post'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from './Loader'


export const FetchedPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)

    if(loading){
        return (
        <Loader/>
    )
    }

    if(!posts.length)
        return <button className ="btn btn-primary" onClick = {()=>dispatch(fetchPosts())}>Загрузить</button>
    else

    return posts.map(post => <Post post={post} key={post.id}/>)
}
