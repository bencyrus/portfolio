import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import SwePage from './pages/SwePage'
import PhotographyPage from './pages/PhotographyPage'
import ProjectsPage from './pages/ProjectsPage'
import PostsPage from './pages/PostsPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
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
                        element: <PostsPage />,
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
                        element: <PostsPage />,
                    },
                ],
            },
        ],
    },
])

export default router
