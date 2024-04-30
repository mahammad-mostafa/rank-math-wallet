import React, { useState } from 'react'
import Icon from './icon'
import Button from './button'
import { FaBitcoinSign } from 'react-icons/fa6'
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'
import Styles from '../styles/hero.module.scss'

const Hero = () => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow((show) => !show)

  return (
    <section className={Styles.body}>
      <div className={Styles.header}>
        <Icon icon={<FaBitcoinSign />} gradient="yellow" />
        <span>Bitcoin</span>
        <span>BTC</span>
      </div>
      <div className={Styles.amount}>3.529020 BTC</div>
      <div className={Styles.value}>
        <span className={Styles.number}>$19.153 USD</span>
        <span className={Styles.percent}>-2.32%</span>
      </div>
      <div className={Styles.buttons}>
        <div className={show ? Styles.controls_show : Styles.controls}>
          <button className={Styles.buy} type="button">Buy</button>
          <button className={Styles.sell} type="button">Sell</button>
        </div>
        <Button icon={show ? <BsChevronCompactUp /> : <BsChevronCompactDown />} wide={true} handler={toggle} />
      </div>
    </section>
  )
}

export default Hero
