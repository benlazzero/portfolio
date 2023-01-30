import { useState, useRef } from 'react'
import { gsap } from 'gsap'
import classes from './Showcase-Sidebar.module.css'

export default function Sidebar() {
  const [isMobile, setMobile] = useState(false)
  const mobileRef = useRef()
  const deskRef = useRef()
  const flatRef = useRef()
  const flatRef2 = useRef()
  
  const HandleView = () => {
    const refs = [mobileRef, deskRef, flatRef, flatRef2]
    
    if (isMobile === true) {
      setMobile(false)
      refs.forEach((item) => {
        gsap.to(item.current, {
          transformOrigin:"50% 50%",
          rotate: 0,
        })
      })
    }
    
    if (isMobile === false) {
      setMobile(true)
      refs.forEach((item) => {
        gsap.to(item.current, {
          transformOrigin:"50% 50%",
          rotate: item.current.id === "1" ? 180 : 270,
        })
      })
    }
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.viewWrapper}>
        <p className={classes.group}>VIEW</p>
        <div className={classes.itemWrapper}>
          <div onClick={HandleView} className={`${classes.icon} ${isMobile ? classes.selected : ''}`}>

            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <line ref={flatRef2} id="1" x1="1" y1="5" x2="9" y2="5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <line ref={mobileRef} x1="1" y1="5" x2="9" y2="5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>

            <p className={classes.item}>Mobile</p>

          </div>
          <div onClick={HandleView} className={`${classes.icon} ${isMobile ? '' : classes.selected}`}>

            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <line ref={flatRef} id="1" x1="1" y1="5" x2="9" y2="5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <line ref={deskRef} x1="5" y1="1" x2="5" y2="9" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>

            <p className={classes.item}>Desk</p>

          </div>
        </div>
      </div>
      <div className={classes.filterWrapper}>
        <p className={classes.group}>FILTERS</p>
      </div>
    </div>
  )
}