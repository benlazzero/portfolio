import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Sidebar from './Showcase-Sidebar'
import Topbar from './Showcase-Topbar'
import Hamburger from './ui/Hamburger'

import classes from './Showcase.module.css'

export default function Showcase() {
  const [isTop, setTop] = useState(false)
  const contRef = useRef()
  
  
  useEffect(() => {
    gsap.fromTo(contRef.current, {
      width: 0,
      height: 0,
      opacity: 0,
      backgroundColor: '#88cdf6',
    }, {
      ease: 'sine',
      duration: 1,
      opacity: 1,
      height: '75%',
      width:'100%',
      backgroundColor: 'aliceblue',
      onComplete: (() => setTop(true))
    })
  }, [])

  return (
    <div ref={contRef} className={classes.container}>
      <div className={classes.sideContainer}>
        { isTop ? <Sidebar /> : null }
      </div>
      <div className={classes.underContainer}>
        <div className={classes.content}>
         { isTop ? <Topbar /> : null }
        </div>
        <div style={{maxHeight: '100%'}}>
          <Hamburger isBig={true} />
        </div>
        <div>
          content
        </div>
      </div>
    </div>
  )
}