import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../styles/item.module.scss'

const Item = ({ name, handler, index, period }) => (
  <li>
    <button className={index === period ? Styles.body_active : Styles.body} type="button" onClick={() => handler(index)}>
      {name}
    </button>
  </li>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  period: PropTypes.number.isRequired
}

export default Item
