import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense, useRef, useState, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, MeshWobbleMaterial, Environment} from '@react-three/drei'
import { Gradient } from './components/ui/Gradient'
import Navigation from './components/Navigation'
import Showcase from './components/Showcase'
import { container } from './App.module.css'

function Rat(props) {
  const ref = useRef()
  const { viewport } = useThree()
  const { nodes, materials } = useGLTF('/ratr.glb')
  const [ratFlag, setRatFlag] = useState(false)
  
  useFrame((state) => {
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 10) * .0008
    if (ratFlag) {
      ref.current.position.x += .02
      if (ref.current.position.x > viewport.width / .8) {
        setRatFlag(!ratFlag)
      }
    } else {
      ref.current.position.x -= .02
      if (ref.current.position.x < -viewport.width / .8) {
        setRatFlag(!ratFlag)
      }
    }
  })
  
  return (
    <group {...props} dispose={null} ref={ref}>
      <Environment preset='warehouse' blur={.2} />
      <mesh 
        geometry={nodes.Main_0.geometry}
        scale={.04}
        rotation={[ratFlag ? .5 : -.5, 0, ratFlag ? 11 : 1.6]}
        position={[ratFlag ? -6.6 : 6.6, ratFlag ? viewport.height / 2.2 : -viewport.height / 2.3 , 0]}
      >
        <MeshWobbleMaterial factor={.3} speed={20} />
      </mesh>
      <mesh 
        geometry={nodes.Main_0.geometry}
        scale={.04}
        rotation={[ratFlag ? .5 : -.5, 0, ratFlag ? 11 : 1.6]}
        position={[ratFlag ? -6.2 : 6.2, ratFlag ? viewport.height / 2.1 : -viewport.height / 2.5 , 0]}
      >
        <MeshWobbleMaterial factor={.3} speed={20} />
      </mesh>
    </group>
  )
}

export default function App() {
  useLayoutEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
  }, [])
  
  
  return (
    <div className={container}>
    <canvas id="gradient-canvas" />
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Showcase />} />
          <Route path='/contact' element={<div>contact</div>} />
        </Routes>
      </Router>
      <Canvas style={{position: 'absolute', zIndex: -1}} >
        <Suspense>
          <group>
            <Rat />
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}

