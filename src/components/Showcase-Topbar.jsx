import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { Canvas} from '@react-three/fiber'
import { Text3D, Float, Center, MeshTransmissionMaterial, Environment, Edges, Stars } from '@react-three/drei'
import { container } from './Showcase-Topbar.module.css'
import futura from '../assets/font/Futura_Medium.json'

export default function Topbar() {
  const [choice, setChoice] = useState(0)
  const [load, setLoad] = useState(true)
  const contRef = useRef()
  const allcolors = ['pink', 'red', 'skyblue', 'yellow', 'purple']
  
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
      <Environment preset='warehouse' blur={1}/>
      <Stars radius={.2} depth={300} count={50000} factor={2} saturation={0} speed={0} />
        <Center>
            <Float rotationIntensity={.5} floatIntensity={.1}>
              <Text3D 
                  letterSpacing={-.5} 
                  font={futura} 
                  size={5}
                  height={.01}
                  bevelEnabled
                  bevelSize={0.4}
                >
                  SHOWCASE
                <MeshTransmissionMaterial
                  color={allcolors[choice]} 
                  transmission={1}
                  thickness={20}
                  toneMapped={false} 
                  chromaticAberration={.09}
                />
                <Edges color='skyblue' scale={1} threshold={20} />
              </Text3D>
            </Float>
          </Center>
      </Canvas>
    </div>
  )
}