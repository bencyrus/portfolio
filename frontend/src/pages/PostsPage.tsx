import React from 'react'

interface PostsPageProps {
    posts: any[]
}

const PostsPage = ({ posts }: PostsPageProps) => {
    return (
        <div>
            <h1>Posts Page</h1>
            <ul>
                {posts.map((post) => (
                    <li>
                        <h5>{post.title}</h5>
                        <p>{post.summary}</p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostsPage
