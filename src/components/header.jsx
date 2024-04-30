import React, { useState } from 'react'
import Button from './button'
import Styles from '../styles/header.module.scss'
import { FaChevronLeft, FaEllipsisVertical } from 'react-icons/fa6'
import Menu from './menu'

const Header = () => {
  const [status, setStatus] = useState(0)
  const open = () => setStatus(1)
  const close = () => {
    setStatus(2)
    setTimeout(() => setStatus(0), 500)
  }

  return (
      <>
      <header className={Styles.body}>
        <div className={Styles.bar}>
          <Button icon={<FaChevronLeft />}/>
          <h1 className={Styles.title}>BitCoin Wallet</h1>
          <Button icon={<FaEllipsisVertical />} handler={open}/>
        </div>
      </header>
      <Menu handler={close} status={status}/>
    </>
  )
}

export default Header
