import { useState } from 'react'
import Fbar from './ui/Fbar'
import classes from './Showcase-Sidebar.module.css'

export default function Sidebar() {
  const [isMobile, setMobile] = useState(false)
  const [isComps, setComps] = useState(false)
  const [isLand, setLand] = useState(false)
  const [isFull, setFull] = useState(false)
  
  const HandleView = () => {
    if (isMobile === true) {
      setMobile(false)
    } else if (isMobile === false) {
      setMobile(true)
    }
  }
  
  const HandleFilter = (e) => {
    const target = e.target.innerHTML
    if (target === 'Components') {
      setComps(!isComps)
    } else if (target === 'Landing Pages') {
      setLand(!isLand)
    } else if (target === 'Full Sites') {
      setFull(!isFull)
    }
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.viewWrapper}>
        <p className={classes.group}>VIEW</p>
        <div className={classes.itemWrapper}>
          <div onClick={HandleView} className={`${classes.icon} ${isMobile ? classes.toggled : classes.unselected}`}>
            <Fbar plus={isMobile ? true : false}/>
            <p className={classes.item}>Mobile</p>
          </div>
          <div onClick={HandleView} className={`${classes.icon} ${isMobile ? classes.unselected : classes.toggled}`}>
            <Fbar plus={isMobile ? false : true}/>
            <p className={classes.item}>Desk</p>
          </div>
        </div>
      </div>
      <p className={classes.group}>FILTERS</p>
      <div className={classes.filterWrapper}>

        <div onClick={HandleFilter} className={`${classes.icon} ${isComps ? classes.selected : classes.unselected}`}>
          <Fbar plus={isComps ? true : false} />
          <p className={classes.item}>Components</p>
        </div>

        <div onClick={HandleFilter} className={`${classes.icon} ${isLand ? classes.selected : classes.unselected}`}>
          <Fbar plus={isLand ? true : false} />
          <p className={classes.item}>Landing Pages</p>
        </div>

        <div onClick={HandleFilter} className={`${classes.icon} ${isFull ? classes.selected : classes.unselected}`}>
          <Fbar plus={isFull ? true : false} />
          <p className={classes.item}>Full Sites</p>
        </div>
      </div>
    </div>
  )
}