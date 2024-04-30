import React from 'react'
import Button from './button'
import Styles from '../styles/footer.module.scss'
import { FaBell, FaCompass, FaWallet } from 'react-icons/fa6'
import { FaCog } from 'react-icons/fa'

const Footer = () => {
  const tabs = [<FaWallet key="wallet" />, <FaCompass key="compass" />, <FaBell key="bell" />, <FaCog key="cog" />]

  return (
    <footer className={Styles.body}>
      <div className={Styles.bar}>
        {tabs.map((icon, index) => <Button key={index} icon={icon} />)}
      </div>
    </footer>
  )
}

export default Footer
