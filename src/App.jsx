import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import Navigation from './components/Navigation';
import Showcase from './components/Showcase';
import { container } from './App.module.css'


function Rat(props) {
  const ref = useRef()
  const { viewport } = useThree()
  const { nodes, materials } = useGLTF('/ratr.glb')
  
  console.log(ref.current)
  
  useFrame((state) => {
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 10) * .01
    ref.current.position.y += .01
    if (ref.current.position.y > viewport.height / 1) {
      ref.current.position.y = -viewport.height / 2
    }
  })
  
  return (
  <group {...props} dispose={null} ref={ref}>
    <mesh 
      geometry={nodes.Main_0.geometry}
      material={materials.Rat_Main_Material}
      material-emissive='black'
      scale={.04}
      position={[.3, -3.3, 0]}
    />
    <mesh 
      geometry={nodes.Main_0.geometry}
      material={materials.Rat_Main_Material}
      material-emissive='black'
      scale={.04}
      position={[0, -3, 0]}
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

