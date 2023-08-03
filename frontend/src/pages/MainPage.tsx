import { Link } from 'react-router-dom'
import profile from '../profile.jpg'
const MainPage = () => {
    return (
        <div>
            <header className='App-header'>
                <img
                    src={profile}
                    className='App-logo'
                    alt='logo'
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                    }}
                />
            </header>
            <h1>Ben Cyrus</h1>
            <p>Software Engineer</p>
            <p>Photographer</p>

            <div>
                <div>
                    <h2>Software Engineer</h2>
                    <ul>
                        <li>
                            <Link to='/swe/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/swe/posts'>Posts</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Photographer</h2>
                    <ul>
                        <li>
                            <Link to='/photography/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/photography/posts'>Posts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainPage
