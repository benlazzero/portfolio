import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Sidebar from './Showcase-Sidebar'
import Topbar from './Showcase-Topbar'

import { container, content } from './Showcase.module.css'

export default function Showcase() {
  const [isTop, setTop] = useState(false)
  const contRef = useRef()
  
  
  useEffect(() => {
    gsap.fromTo(contRef.current, {
      width: 0,
      height: 0,
      opacity: 0,
    }, {
      ease: 'sine',
      duration: 2,
      opacity: 1,
      width:'100%',
      height: '70%',
      onComplete: (() => setTop(true))
    })
    
  }, [])

  return (
    <div ref={contRef} className={container}>
      <Sidebar />
      <div className={content}>
       { isTop ? <Topbar /> : null }
      </div>
    </div>
  )
}