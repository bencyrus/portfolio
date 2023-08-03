import { Outlet } from 'react-router-dom'

const SwePage = () => {
    return (
        <div>
            <h1>SWE</h1>
            <nav>
                <ul>
                    <li>
                        <a href='/swe/projects'>Projects</a>
                    </li>
                    <li>
                        <a href='/swe/posts'>Posts</a>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default SwePage
