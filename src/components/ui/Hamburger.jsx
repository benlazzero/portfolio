import { useRef, useEffect, useState } from 'react'
import classes from './Hamburger.module.css'

export default function Hamburger(props) {
  const contRef = useRef()
  const isbig = props.isbig
  
  return (
    isbig ? 
    <div className={classes.container} style={{height: '100%'}}>
      hamy
    </div> 
    :
    <div className={classes.container}>
      hamy
    </div>
  ) 
}