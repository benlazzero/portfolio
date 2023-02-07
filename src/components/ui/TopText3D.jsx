import { useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Text3D, MeshTransmissionMaterial, Edges } from '@react-three/drei'
import futura from '../../assets/font/Futura_Medium.json'

export default function TopText3D({color, changeColor}) {
  const { viewport } = useThree()
  const [isSmall, setSmall] = useState(false)
  
  useFrame(() => {
    if (viewport.width < 190 && isSmall === false) {
      setSmall(true) 
      changeColor()
    } else if (viewport.width > 190 && isSmall === true) {
      setSmall(false)
      changeColor()
    }
  })
  
  return (
    <Text3D 
      letterSpacing={-.1} 
      font={futura} 
      size={ isSmall ? 2.5 : 5}
      height={.05}
      bevelEnabled
      bevelSize={0.4}
    >
      {'<PROJECTS />'}
      <MeshTransmissionMaterial
        color={color}
        transmission={1.2}
        thickness={20}
        roughness={0}
        toneMapped={true} 
        chromaticAberration={.1}
      />
      <Edges color='silver' scale={1} threshold={20} />
    </Text3D>
  )
}