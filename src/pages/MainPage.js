import React from 'react'
import About from './About'
import OurMenu from './OurMenu'
import ClientRemarks from './ClientRemarks'
import Location from './Location'
import Home from './Home'

const MainPage = () => {
    return (
        <div>
            <Home />
            <About />
            <OurMenu />
            <ClientRemarks />
            <Location />
        </div>
    )
}

export default MainPage