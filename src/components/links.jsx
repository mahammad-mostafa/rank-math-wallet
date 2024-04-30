import React from 'react'
import Link from './link'
import Icon from './icon'
import { FaBitcoinSign } from 'react-icons/fa6'
import Styles from '../styles/links.module.scss'

const Links = () => (
  <section className={Styles.body}>
    <Link icon={<Icon icon={<FaBitcoinSign />} gradient="blue" />} text="Buy BTC"/>
    <Link icon={<Icon icon={<FaBitcoinSign />} gradient="red" />} text="Sell BTC"/>
  </section>
)

export default Links
