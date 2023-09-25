import { useParams } from 'react-router-dom'
import swePosts from '../data/swePosts.json'

const PostPage = () => {
    const { id } = useParams()
    const post = swePosts.find((post) => post.id === Number(id))

    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.summary}</p>
            <p>{post?.body}</p>
        </div>
    )
}

export default PostPage
