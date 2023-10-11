import React from 'react'
import Button from '../Button/Button'
import styles from '../Navbar/Navbbar.module.css'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <Search placeholder='Search a album of your choice'/>
        <Button children="Give Feedback"/>
    </nav>
  )
}

export default Navbar
