import { forwardRef, useRef, useEffect } from "react"
import { gsap } from 'gsap'

const Fbar = forwardRef((props, ref) => {
  const changeRef = useRef()
  const spinRef = useRef()
  const isPlus = props.plus

  useEffect(() => {
    gsap.to(changeRef.current, {
      transformOrigin:"50% 50%",
      rotate: isPlus ? 270 : 0,
    })
    gsap.to(spinRef.current, {
      transformOrigin:"50% 50%",
      rotate: isPlus ? 180 : 0,
    })
  }, [isPlus])

  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <line ref={changeRef} id="1" x1="1" y1="5" x2="9" y2="5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
      <line ref={spinRef} x1="1" y1="5" x2="9" y2="5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
})

export default Fbar