import { Link } from 'react-router-dom'
import profile from '../profile.jpg'
import PostCard from '../components/PostCard'
import swePosts from '../data/swePosts.json'

const MainPage = () => {
    return (
        <div>
            <header
                className='App-header'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                }}>
                <img
                    src={profile}
                    className='App-logo'
                    alt='logo'
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                    }}
                />

                <div>
                    <h1
                        style={{
                            fontSize: '50px',
                            marginBottom: '0px',
                        }}>
                        Ben Cyrus
                    </h1>
                    <p>Software Engineer, Photographer</p>
                </div>
            </header>

            <div
                style={{
                    margin: '20px 0px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <span>Explore my work</span>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                    }}>
                    <Link to='/swe'>Software</Link>
                    <Link to='/photography'>Photography</Link>
                </div>
            </div>

            <div>
                <h2>Latest Activity</h2>
                {swePosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default MainPage
