import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className='App'>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/swe'>SWE</a>
                    </li>
                    <li>
                        <a href='/photography'>Photography</a>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default App
