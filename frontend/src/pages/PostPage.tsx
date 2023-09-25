import { useParams } from 'react-router-dom'
import swePosts from '../data/swePosts.json'

const PostPage = () => {
    const { id } = useParams()
    const post = swePosts.find((post) => post.id === Number(id))

    return (
        <div>
            <header>
                <h1>{post?.title}</h1>
                <p>{post?.summary}</p>
            </header>

            {post?.body && <div dangerouslySetInnerHTML={{ __html: post.body }} />}
        </div>
    )
}

export default PostPage
