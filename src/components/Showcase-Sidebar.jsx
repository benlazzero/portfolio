import { useState } from 'react'
import Fbar from './ui/Fbar'
import classes from './Showcase-Sidebar.module.css'

export default function Sidebar() {
  const [isMobile, setMobile] = useState(false)
  
  const HandleView = () => {
    if (isMobile === true) {
      setMobile(false)
    } else if (isMobile === false) {
      setMobile(true)
    }
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.viewWrapper}>
        <p className={classes.group}>VIEW</p>
        <div className={classes.itemWrapper}>
          <div onClick={HandleView} className={`${classes.icon} ${isMobile ? classes.selected : ''}`}>
            <Fbar plus={isMobile ? true : false}/>
            <p className={classes.item}>Mobile</p>
          </div>
          <div onClick={HandleView} className={`${classes.icon} ${isMobile ? '' : classes.selected}`}>
            <Fbar plus={isMobile ? false : true}/>
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