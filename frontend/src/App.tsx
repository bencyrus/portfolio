import profile from './profile.jpg'

function App() {
    return (
        <div className='App'>
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
        </div>
    )
}

export default App
