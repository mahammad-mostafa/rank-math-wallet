import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../styles/navigation.module.scss'

const Navigation = ({ text, icon, handler = null }) => (
  <li className={Styles.body}>
    <a className={Styles.link} href="#!" onClick={() => { if (handler) handler() }}>
      <span>{text}</span>
      {icon}
    </a>
  </li>
)

Navigation.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  handler: PropTypes.func
}

export default Navigation
