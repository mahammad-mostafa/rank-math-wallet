import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../styles/label.module.scss'

const Label = ({ color, text, value, dark = false }) => (
  <div className={Styles.body}>
    <span className={Styles[color]}></span>
    <p className={dark ? Styles.body_dark : Styles.body_light}>
      {text}{value}
    </p>
  </div>
)

Label.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  dark: PropTypes.bool
}

export default Label
