import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../styles/icon.module.scss'

const Icon = ({ icon, gradient }) => (
  <span className={Styles[gradient]}>
    {icon}
  </span>
)

Icon.propTypes = { icon: PropTypes.element.isRequired, gradient: PropTypes.string.isRequired }

export default Icon
