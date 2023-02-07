import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { Canvas } from '@react-three/fiber'
import { Float, Center, Environment, Image } from '@react-three/drei'
import { container } from './Showcase-Topbar.module.css'
import TopText3D from './ui/TopText3D'


export default function Topbar() {
  const [choice, setChoice] = useState(0)
  const contRef = useRef()
  const meshcolors = ['skyblue', 'white', 'maroon']
  
  useEffect(() => {
      gsap.fromTo(contRef.current, {
        opacity: 0
      }, {
        duration: 1,
        opacity: 1
      })    
  }, [])
  
  
  const ChangeColor = () => {
    setChoice(choice => (choice + 1) % 3)
  }
  
  return (
    <div ref={contRef} className={container} >
      <Canvas camera={{ position: [3, 0, 30], zoom: 5 }} onClick={ChangeColor}>
      <Image url='/sky.png' scale={[175, 100]} position={[-10, -40, -30]}/>
      <Environment preset='warehouse' blur={.2} />
        <Center>
          <Float rotationIntensity={.5} floatIntensity={.1}>
            <TopText3D color={meshcolors[choice]} changeColor={ChangeColor} />
          </Float>
        </Center>
      </Canvas>
    </div>
  )
}