import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Venusaur(props) {
  const { nodes, materials } = useGLTF("/Venusaur.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.366}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials.Material__63}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["Material__61.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials.Material__62}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials["Material__60.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Venusaur.gltf");
