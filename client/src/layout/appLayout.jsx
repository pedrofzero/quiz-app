import React, { useState } from 'react'
import Header from 'layout/header'
import Footer from 'layout/footer'
import Menu from 'layout/menu'
import useWindowSize from 'hooks/useWindowSize'

const AppLayout = ({ children }) => {

    const size = useWindowSize();
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div style={styles.wrapper}>

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {size < 900 &&
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            }
            {children}
            {/* <Footer /> */}
        </div>
    )
}

const styles = {
    wrapper: {
        padding: '20px',
        height: '100%',
    }
}

export default AppLayout