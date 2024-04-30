import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../styles/link.module.scss'

const Link = ({ icon, text }) => (
  <a className={Styles.body} href="#!">
    {icon}
    <span className={Styles.text}>{text}</span>
  </a>
)

Link.propTypes = { icon: PropTypes.element.isRequired, text: PropTypes.string.isRequired }

export default Link
