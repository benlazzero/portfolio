import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Sidebar from './Showcase-Sidebar'
import Topbar from './Showcase-Topbar'

import { container, content} from './Showcase.module.css'

export default function Showcase() {
  const contRef = useRef()
  
  useEffect(() => {
    gsap.fromTo(contRef.current, {
      width: 0,
      height: 0
    }, {
      width: 3000,
      height: 800
    })

  }, [])

  return (
    <div ref={contRef} className={container}>
      <Sidebar />
      <div className={content}>
        <Topbar />
      </div>
    </div>
  )
}