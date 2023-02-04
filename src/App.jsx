import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import Navigation from './components/Navigation';
import Showcase from './components/Showcase';
import { container } from './App.module.css'

function Rat(props) {
  const ref = useRef()
  const { viewport } = useThree()
  const { nodes, materials } = useGLTF('/ratr.glb')
  const [ratFlag, setRatFlag] = useState(false)
  
  useFrame((state) => {
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 10) * .004
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
      <mesh 
        geometry={nodes.Main_0.geometry}
        material={materials.Rat_Main_Material}
        material-emissive='black'
        scale={.04}
        rotation={[ratFlag ? .5 : -.5, 0, ratFlag ? 11 : 1.6]}
        position={[ratFlag ? -6.6 : 6.6, ratFlag ? viewport.height / 2.2 : -viewport.height / 2.3 , 0]}
      />
      <mesh 
        geometry={nodes.Main_0.geometry}
        material={materials.Rat_Main_Material}
        material-emissive='black'
        scale={.04}
        rotation={[ratFlag ? .5 : -.5, 0, ratFlag ? 11 : 1.6]}
        position={[ratFlag ? -6.2 : 6.2, ratFlag ? viewport.height / 2.1 : -viewport.height / 2.5 , 0]}
      />
    </group>
  )
}

export default function App() {
  return (
    <div className={container}>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Showcase />} />
          <Route path='/contact' element={<div>contact</div>} />
        </Routes>
      </Router>
      <Canvas style={{position: 'absolute', zIndex: -1}}>
        <Suspense>
          <group>
            <Rat />
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}

