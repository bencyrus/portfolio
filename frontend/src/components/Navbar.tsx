import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: '#333',
                color: '#fff',
            }}>
            {open && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ padding: '10px' }}>
                        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                            Home
                        </Link>
                    </li>
                    <li style={{ padding: '10px' }}>
                        <Link to='/swe' style={{ textDecoration: 'none', color: '#fff' }}>
                            SWE
                        </Link>
                    </li>
                    <li style={{ padding: '10px' }}>
                        <Link to='/photography' style={{ textDecoration: 'none', color: '#fff' }}>
                            Photography
                        </Link>
                    </li>
                </ul>
            )}
            <div onClick={handleOpen} style={{ fontSize: '1.5em', cursor: 'pointer' }}>
                {open ? <IoMdClose style={{ color: '#fff' }} /> : <FaBars style={{ color: '#fff' }} />}
            </div>
        </nav>
    )
}

export default Navbar
