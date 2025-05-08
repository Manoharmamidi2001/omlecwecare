import React from 'react'
import footerTop from '../styles/footerTop.module.scss'
const FooterTop = () => {
  return (
    <div className={footerTop.container}>
        <div className={footerTop.first}>
            <h2>Learn about our discounts</h2>
            <p>Countray to Popular belief</p>
        </div>
        <div className={footerTop.last}>
            <input type="text" placeholder='Email address'/>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default FooterTop
