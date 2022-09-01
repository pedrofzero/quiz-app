import React from 'react'

const Footer = () => {
  return (
    <div style={styles.footer}>Footer</div>
  )
}

const styles = {
  footer: {
    position:'fixed',bottom:0,left:0,right:0,height:'60px', margin: '0 auto', textAlign: 'center', border: '1px red solid'
  }
}

export default Footer