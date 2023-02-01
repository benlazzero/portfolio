import { container, selected, unselected } from './Navigation.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const [index, setIndex] = useState(true)
  
  const HandleLink = () => {
      setIndex(!index)
  }

  return (
    <div className={container}>
      <Link to='/' onClick={HandleLink} className={index ? unselected : selected}>
        BENJAMIN LEE
      </Link>
      <Link to='/contact' onClick={HandleLink} className={index ? selected : unselected}>
        CONTACT
      </Link>
    </div>
  )
}