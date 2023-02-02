import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { container, selected, unselected } from './Navigation.module.css'

export default function Navigation() {
  const [index, setIndex] = useState(true)
  const contRef = useRef()
  
  const HandleLink = () => {
    setIndex(!index)
  }
  
  useEffect(() => {
    gsap.fromTo(contRef.current, {
      color: 'limegreen',
      opacity: 0,
    }, {
      color: 'unset',
      ease: 'sine',
      duration: 2,
      opacity: 1
    }) 
  }, [])

  return (
    <div ref={contRef} className={container}>
      <Link to='/' onClick={HandleLink} className={index ? unselected : selected}>
        BENJAMIN LEE
      </Link>
      <Link to='/contact' onClick={HandleLink} className={index ? selected : unselected}>
        CONTACT
      </Link>
    </div>
  )
}