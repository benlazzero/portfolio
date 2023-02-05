import { useRef, useEffect } from 'react'
import classes from './Hamburger.module.css'

export default function Hamburger(props) {
  const contRef = useRef()
  let isBig = props.isBig
  
  useEffect(() => {
    if (isBig) {
      contRef.current.style.height = '100%' 
    }
  }, [])
  

  return (
    <div ref={contRef} className={classes.container}>
      hamy
    </div>
  ) 
}