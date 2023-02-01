import { useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { Text3D, Float, Center, Stage, MeshTransmissionMaterial, Environment, Edges, Sky, Stars} from '@react-three/drei'
import { container } from './Showcase-Topbar.module.css'
import futura from '../assets/font/Futura_Medium.json'

export default function Topbar() {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [choice , setChoice] = useState(0)
  const allcolors = ['pink', 'yellow', 'skyblue', 'red', 'purple']

  const onMouseMove = (e) => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 1) * -Math.PI) / 16,
      ((e.clientX / e.target.offsetWidth - 1) * -Math.PI) / 16,
      0
    ])
  }
  
  const ChangeColor = () => {
    if (choice === 4) {
      setChoice(0)
    } else {
      setChoice(choice + 1)
    }
  }
  
  return (
    <div className={container} onMouseMove={onMouseMove} >
      <Canvas camera={{ position: [0, 0, 31], zoom: 5 }} onClick={ChangeColor}>
      <color attach="background" args={['white']} />
      <Environment preset='city' blur={1}/>
      <Stars radius={.2} depth={300} count={50000} factor={2} saturation={0} speed={0} />
        <Stage shadows environment='lobby'>
            <Float rotationIntensity={.2}>
              <Center>
                <Text3D 
                  letterSpacing={-.7} 
                  rotation={rotation} 
                  font={futura} 
                  size={5}
                  height={.01}
                  bevelEnabled
                  bevelSize={0.4}
                >
                  SHOWCASE
                <MeshTransmissionMaterial
                  color={allcolors[choice]} 
                  transmission={2}
                  thickness={20}
                  toneMapped={false} 
                  chromaticAberration={.09}
                />
                <Edges color='skyblue' scale={1} threshold={20} />
                </Text3D>
              </Center>
            </Float>
        </Stage>
      </Canvas>
    </div>
  )
}