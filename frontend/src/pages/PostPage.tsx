import { useParams } from 'react-router-dom'
import swePosts from '../data/swePosts.json'

const PostPage = () => {
    const { id } = useParams()
    const post = swePosts.find((post) => post.id === Number(id))

    const postDate = post && new Date(post.created_at)
    const formattedDate = postDate?.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto',
            }}>
            <header>
                <h1>{post?.title}</h1>
                <div style={{ fontStyle: 'italic', marginBottom: '10px' }}>Published on {formattedDate}</div>
                <hr />
                <p>{post?.summary}</p>
            </header>

            {post?.body && <div dangerouslySetInnerHTML={{ __html: post.body }} />}
        </div>
    )
}

export default PostPage
