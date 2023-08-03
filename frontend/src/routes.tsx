import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import SwePage from './pages/SwePage'
import PhotographyPage from './pages/PhotographyPage'
import ProjectsPage from './pages/ProjectsPage'
import PostsPage from './pages/PostsPage'

import swePosts from './data/swePosts.json'
import MainPage from './pages/MainPage'

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
                element: <SwePage />,
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
