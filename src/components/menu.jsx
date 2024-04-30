import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navigation from './navigation'
import { BsInputCursor } from 'react-icons/bs'
import { LiaBoxSolid } from 'react-icons/lia'
import { RiShare2Line } from 'react-icons/ri'
import { FiMinusCircle } from 'react-icons/fi'
import Styles from '../styles/menu.module.scss'
import { FaMoon, FaSun } from 'react-icons/fa6'

const Menu = ({ handler, status }) => {
  const [dark, setDark] = useState(false)
  const classes = ['body', 'body_open', 'body_close']
  const links = [
    { text: 'edit', icon: <BsInputCursor /> },
    { text: 'courier info', icon: <LiaBoxSolid /> },
    { text: 'share', icon: <RiShare2Line /> },
    { text: 'remove', icon: <FiMinusCircle /> },
    { text: 'switch theme', icon: dark ? <FaSun /> : <FaMoon /> }
  ]
  const theme = () => {
    setDark((dark) => !dark)
    if (dark) {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  return (
    <menu className={Styles[classes[status]]} onClick={() => handler()}>
      <div className={Styles.wrapper}>
        <nav className={status === 1 ? Styles.navigation_show : Styles.navigation}>
          <ul className={Styles.list}>
            {links.map((link, index) => <Navigation key={index} icon={link.icon} text={link.text} handler={theme} />)}
          </ul>
        </nav>
      </div>
    </menu>
  )
}

Menu.propTypes = { handler: PropTypes.func.isRequired, status: PropTypes.number.isRequired }

export default Menu
