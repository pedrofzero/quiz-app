import React from 'react'
import Header from 'layout/header'
import Footer from 'layout/footer'

const AppLayout = ({ children }) => {
    return (
        <div style={styles.wrapper}>
            <Header />
            {children}
            <Footer />
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