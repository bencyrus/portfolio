import React from 'react'

interface PostsPageProps {
    posts: any[]
}

const PostsPage = ({ posts }: PostsPageProps) => {
    return (
        <div>
            <h1>Posts Page</h1>
            {posts.map((post) => (
                <div
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        margin: '0 auto',
                        backgroundColor: '#ededed',
                        padding: '10px',
                        borderRadius: '5px',
                        boxSizing: 'border-box',
                        marginBottom: '20px',
                    }}>
                    <header>
                        <h1>{post?.title}</h1>
                        <div style={{ fontStyle: 'italic', marginBottom: '10px' }}>
                            Published on{' '}
                            {new Date(post.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </div>
                        <hr />
                        <p>{post?.summary}</p>
                    </header>

                    {post?.body && <div dangerouslySetInnerHTML={{ __html: post.body }} />}
                </div>
            ))}
        </div>
    )
}

export default PostsPage
