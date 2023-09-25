import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Nav.module.css"


const Nav = () => {
  return (
    <div className={styles.nav}>
    <h3 className={styles.lk}>Welcome</h3>
    <img src="" alt="" />
    <div>
    <Link className={styles.lk} to="/">Home</Link>
    <Link  className={styles.lk} to="/body">Create</Link>
    <Link  className={styles.lk} to="/about">About</Link>
    </div>
    </div>
  )
}

export default Nav