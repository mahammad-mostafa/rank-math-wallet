import React, { useState } from 'react'
import Item from './item'
import Styles from '../styles/graph.module.scss'
import Label from './label'
import { Area, AreaChart, ReferenceDot, ResponsiveContainer } from 'recharts'

const Graph = () => {
  const [period, setPeriod] = useState(0)
  const items = ['day', 'week', 'month', 'year']
  const points = [
    [{ value: 6.611 }, { value: 6.264 }, { value: 6.537 }, { value: 6.727 }, { value: 6.241 }, { value: 5.483 }],
    [{ value: 4.895 }, { value: 5.476 }, { value: 5.251 }, { value: 6.857 }, { value: 6.611 }, { value: 5.483 }],
    [{ value: 4.431 }, { value: 4.276 }, { value: 4.895 }, { value: 5.842 }, { value: 5.551 }, { value: 5.483 }],
    [{ value: 3.716 }, { value: 3.904 }, { value: 4.195 }, { value: 4.869 }, { value: 5.491 }, { value: 5.483 }]
  ]
  const maximum = () => points[period].reduce((previous, current) => previous.value > current.value ? previous : current).value
  const minimum = () => points[period].reduce((previous, current) => previous.value < current.value ? previous : current).value

  return (
  <section className={Styles.body}>
    <ul className={Styles.list}>
      {items.map((name, index) => <Item key={index} name={name} handler={setPeriod} index={index} period={period} />)}
    </ul>
    <div className={Styles.block}>
      <div className={Styles.labels}>
        <Label color="red" text="Lower: $" value={minimum()} />
        <Label color="green" text="Higher: $" value={maximum()} />
      </div>
      <div className={Styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={points[period]} margin={{ top: 12, left: 0, right: 12, bottom: 0 }}>
            <defs>
              <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" className={Styles.primary} />
                <stop offset="100%" className={Styles.secondary} />
              </linearGradient>
              <linearGradient id="filler">
                <stop className={Styles.area} />
              </linearGradient>
              <linearGradient id="dot">
                <stop className={Styles.dot} />
              </linearGradient>
            </defs>
            <Area type="basis" dataKey="value" stroke="url(#gradient)" strokeWidth="4" fill="url(#filler)" />
            <ReferenceDot x={5} y={5.483} r={7.5} fill="url(#gradient)" stroke="url(#dot)" strokeWidth="8" ifOverflow="visible" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <Label color="yellow" text="1 BTC = $" value={5.483} dark={true} />
    </div>
  </section>
  )
}

export default Graph
