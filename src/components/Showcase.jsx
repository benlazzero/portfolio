import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Sidebar from './Showcase-Sidebar'
import Topbar from './Showcase-Topbar'
import Hamburger from './ui/Hamburger'

import classes from './Showcase.module.css'

export default function Showcase() {
  const [isTop, setTop] = useState(false)
  const [showHam, setHam] = useState(false)
  const contRef = useRef()
  const hamRef = useRef()
  const hamWrap = useRef()
  const sideRef = useRef()
  
  
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
  
  const HandleClick = () => {
   setHam(!showHam) 
   sideRef.current.style.display = 'flex'
   if (!showHam) {
     gsap.to(hamRef.current, {
       duration: '1',
       height: '30px', 
     })
     gsap.to(hamWrap.current, {
       duration: '1',
       height: '100%', 
     })
     gsap.to(sideRef.current, {
       opacity: '1'
     })
   }
   
   if (showHam) {
     gsap.to(hamRef.current, {
       duration: '1',
       height: '30px',
     })
     gsap.to(hamWrap.current, {
       duration: '1',
       height: '7%', 
       onComplete: (()=> {
        sideRef.current.style.display = 'none'
       })
     })
     gsap.to(sideRef.current, {
       opacity: '0'
     })
   }
   
  }

  return (
    <div ref={contRef} className={classes.container}>
      <div className={classes.sideContainer}>
        { isTop ? <Sidebar /> : null }
      </div>
      <div className={classes.underContainer}>
        <div className={classes.content}>
         { isTop ? <Topbar /> : null }
        </div>
        <div ref={hamWrap} className={classes.hamContainer}>
          <>
            <Sidebar ref={sideRef} isHam={true} /> 
            <Hamburger onPress={HandleClick} ref={hamRef} isbig={true} />
            <div style={{display: showHam ? 'none' : 'block'}}>
              content
            </div>
          </>
        </div>
      </div>
    </div>
  )
}