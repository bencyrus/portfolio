import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import SwePage from './pages/SwePage'
import PhotographyPage from './pages/PhotographyPage'
import ProjectsPage from './pages/ProjectsPage'
import PostsPage from './pages/PostsPage'

import swePosts from './data/swePosts.json'
import MainPage from './pages/MainPage'
import PostPage from './pages/PostPage'

const sortedSwePosts = swePosts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <MainPage />,
            },
            {
                path: 'swe',
                children: [
                    {
                        path: '',
                        element: <SwePage />,
                    },
                    {
                        path: 'projects',
                        element: <ProjectsPage />,
                    },
                    {
                        path: 'posts',
                        element: <PostsPage posts={sortedSwePosts} />,
                    },
                    {
                        path: 'posts/:id',
                        element: <PostPage />,
                    },
                ],
            },
            {
                path: 'photography',
                element: <PhotographyPage />,
                children: [
                    {
                        path: 'projects',
                        element: <ProjectsPage />,
                    },
                    {
                        path: 'posts',
                        element: <PostsPage posts={swePosts} />,
                    },
                ],
            },
        ],
    },
])

export default router
