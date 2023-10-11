import React from 'react'
import Button from '../Button/Button'
import styles from '../Navbar/Navbbar.module.css'
import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <Button children="Give Feedback"/>
    </nav>
  )
}

export default Navbar
