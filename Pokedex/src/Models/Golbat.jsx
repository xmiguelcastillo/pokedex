
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Golbat(props) {
  const { nodes, materials } = useGLTF('/Golbat.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0035_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.214}>
        <skinnedMesh
          geometry={nodes.Mesh_1__Body00_.geometry}
          material={materials['Body00.005']}
          skeleton={nodes.Mesh_1__Body00_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_2__Eye_.geometry}
          material={materials['Eye.016']}
          skeleton={nodes.Mesh_2__Eye_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_3__Body00_.geometry}
          material={materials['Body00.005']}
          skeleton={nodes.Mesh_3__Body00_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_4__Body01_.geometry}
          material={materials['Body01.001']}
          skeleton={nodes.Mesh_4__Body01_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_5__Body03_.geometry}
          material={materials['Body03.001']}
          skeleton={nodes.Mesh_5__Body03_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_6__Body01_.geometry}
          material={materials['Body01.001']}
          skeleton={nodes.Mesh_6__Body01_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_7__Body02_.geometry}
          material={materials['Body02.001']}
          skeleton={nodes.Mesh_7__Body02_.skeleton}
        />
        <primitive object={nodes.pm0042_00_golbat} />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
      <primitive object={nodes.pm0026_00_raichu} />
      <primitive object={nodes.pm0029_00} />
      <primitive object={nodes.pm0030_00} />
      <primitive object={nodes.pm0031_00} />
      <primitive object={nodes.pm0032_00} />
      <primitive object={nodes.pm0033_00} />
      <primitive object={nodes._03_Waist} />
    </group>
  )
}

useGLTF.preload('/Golbat.glb')

