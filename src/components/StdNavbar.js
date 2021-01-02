import React, { useState } from 'react'
import './StdNavbar.scss'
import image from '../icons8-menu-128.png'

const StdNavbar = () => {
    const [state, setState] = useState(true)

    const handleToggle = () => {
        setState(!state)
    }

    return (
        <>
            <nav>
                <div className="wrapper container">
                    <a href="#" id='logo'>Logo</a>
                    <div className={state ? "nav-links" : 'nav-links active'}>
                        <a href="#">home</a>
                        <a href="#">about</a>
                        <a href="#">contact</a>
                    </div>
                    {/* <button onClick={handleToggle} className='btn'>click</button>
                     */}
                    <button onClick={handleToggle} id='toggler'><img src={image} alt="" /></button>
                </div>

            </nav>

        </>
    )
}

export default StdNavbar
