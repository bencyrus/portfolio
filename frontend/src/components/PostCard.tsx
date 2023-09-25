import { Link } from 'react-router-dom'

interface Post {
    id: number
    title: string
    summary: string
    body: string
}

const PostCard = ({ post }: { post: Post }) => {
    const shortSummary = post.summary.length > 500 ? post.summary.substring(0, 500) + '...' : post.summary

    return (
        <div
            className='card'
            style={{
                width: '100%',
                maxWidth: '1200px',
                backgroundColor: '#ededed',
                borderRadius: '5px',
                padding: '10px',
                marginBottom: '10px',
                boxSizing: 'border-box',
            }}>
            <div className='card-body'>
                <h4 className='card-title' style={{ marginTop: '0' }}>
                    {post.title}
                </h4>
                <p className='card-text'>{shortSummary}</p>
                <Link
                    to={`/swe/posts/${post.id}`}
                    className='card-link'
                    style={{
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        color: 'black',
                    }}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default PostCard
