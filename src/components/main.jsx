import React from 'react'
import Hero from './hero'
import Graph from './graph'
import Links from './links'
import Styles from '../styles/main.module.scss'

const Main = () => (
  <main className={Styles.body}>
    <div className={Styles.wrapper}>
      <Hero />
      <Graph />
      <Links />
    </div>
  </main>
)

export default Main
