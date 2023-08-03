import { Outlet } from 'react-router-dom'

const PhotographyPage = () => {
    return (
        <div>
            <h1>Photography Page</h1>
            <nav>
                <ul>
                    <li>
                        <a href='/photography/projects'>Projects</a>
                    </li>
                    <li>
                        <a href='/photography/posts'>Posts</a>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default PhotographyPage
