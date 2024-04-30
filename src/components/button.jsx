import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../styles/button.module.scss'

const Button = ({ icon, wide = false, handler = null }) => (
  <button className={wide ? Styles.body_wide : Styles.body} type="button" onClick={() => { if (handler) handler() }}>
    {icon}
  </button>
)

Button.propTypes = {
  icon: PropTypes.element.isRequired,
  wide: PropTypes.bool,
  handler: PropTypes.func
}

export default Button
