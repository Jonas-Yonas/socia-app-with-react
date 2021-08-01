import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'
// import { Posts } from '../../dummyData'

export default function Feed() {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        // const res = axios.get("posts/timeline/60cfe98a1dbac00ed4b3b78e")
        // console.log(res)
        const fetchPosts = async () => {
            const res = await axios.get('posts/timeline/60cfe98a1dbac00ed4b3b78e')
            setPosts(res.data)
        }

        fetchPosts()
    }, [])
    
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
                {/* {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))} */}
            </div>
        </div>
    )
}
