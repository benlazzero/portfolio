import { forwardRef, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import classes from './Hamburger.module.css'

const Hamburger = forwardRef((props, ref) => {
  return (
    <div onClick={props.onPress} ref={ref} className={classes.container} >
      <div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>
    </div> 
  )
})

export default Hamburger