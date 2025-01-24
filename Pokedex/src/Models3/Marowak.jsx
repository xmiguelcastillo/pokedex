
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Marowak(props) {
  const { nodes, materials } = useGLTF('/Marowak.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <primitive object={nodes.pm0094_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0096_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0100_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0101_00} />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
      <primitive object={nodes.neutral_bone} />
      <skinnedMesh
        geometry={nodes.Marowak_1.geometry}
        material={materials.Material__151}
        skeleton={nodes.Marowak_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Marowak_2.geometry}
        material={materials.Material__152}
        skeleton={nodes.Marowak_2.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/Marowak.glb')

