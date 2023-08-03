import { Outlet } from 'react-router-dom'
import MainPage from './pages/MainPage'

function App() {
    return (
        <div className='App'>
            <MainPage />
            <Outlet />
        </div>
    )
}

export default App
