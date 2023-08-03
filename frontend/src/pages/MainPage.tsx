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
        </div>
    )
}

export default MainPage
