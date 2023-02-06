import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { Canvas } from '@react-three/fiber'
import { Text3D, Float, Center, MeshTransmissionMaterial, Environment, Edges, Image } from '@react-three/drei'
import { container } from './Showcase-Topbar.module.css'
import futura from '../assets/font/Futura_Medium.json'

export default function Topbar() {
  const [choice, setChoice] = useState(0)
  const contRef = useRef()
  const meshcolors = ['#87CEEB', 'orange', 'green', 'pink', 'maroon']
  
  useEffect(() => {
      gsap.fromTo(contRef.current, {
        opacity: 0
      }, {
        duration: 1,
        opacity: 1
      })    
  }, [])
  
  const ChangeColor = () => {
    setChoice(choice => (choice + 1) % 5)
  }
  
  return (
    <div ref={contRef} className={container} >
      <Canvas camera={{ position: [3, 0, 30], zoom: 5 }} onClick={ChangeColor}>
      <Image url='/sky.png' scale={[175, 100]} position={[-10, -40, -30]}/>
      <Environment preset='warehouse' blur={.2} />
        <Center>
          <Float rotationIntensity={.5} floatIntensity={.1}>
            <Text3D 
                letterSpacing={-.1} 
                font={futura} 
                size={5}
                height={.05}
                bevelEnabled
                bevelSize={0.4}
              >
                {'<PROJECTS />'}
              <MeshTransmissionMaterial
                color={meshcolors[choice]} 
                transmission={1.2}
                thickness={20}
                roughness={0}
                toneMapped={true} 
                chromaticAberration={.1}
              />
              <Edges color='silver' scale={1} threshold={20} />
            </Text3D>
          </Float>
        </Center>
      </Canvas>
    </div>
  )
}