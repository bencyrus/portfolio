import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const isActive = (path: string) => location.pathname === path

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <nav
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: '#333',
                color: '#fff',
            }}>
            <div onClick={handleOpen} style={{ fontSize: '22px', cursor: 'pointer', alignSelf: 'flex-end' }}>
                {open ? <IoMdClose style={{ color: '#fff' }} /> : <FaBars style={{ color: '#fff' }} />}
            </div>
            {open && (
                <ul
                    style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <li style={{ padding: '10px', textAlign: 'center' }}>
                        <Link
                            to='/'
                            style={
                                isActive('/')
                                    ? { textDecoration: 'none', color: '#42a5f5', fontWeight: 'bold' }
                                    : { textDecoration: 'none', color: '#fff' }
                            }
                            onClick={() => setOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li style={{ padding: '10px', textAlign: 'center' }}>
                        <Link
                            to='/swe'
                            style={
                                isActive('/swe')
                                    ? { textDecoration: 'none', color: '#42a5f5', fontWeight: 'bold' }
                                    : { textDecoration: 'none', color: '#fff' }
                            }
                            onClick={() => setOpen(false)}>
                            SWE
                        </Link>
                    </li>
                    <li style={{ padding: '10px', textAlign: 'center' }}>
                        <Link
                            to='/photography'
                            style={
                                isActive('/photography')
                                    ? { textDecoration: 'none', color: '#42a5f5', fontWeight: 'bold' }
                                    : { textDecoration: 'none', color: '#fff' }
                            }
                            onClick={() => setOpen(false)}>
                            Photography
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar
