import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ivysaur(props) {
  const { nodes, materials } = useGLTF("/Ivysaur.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.505}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["Material__46.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["Material__47.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials["Material__48.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials["Material__49.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Ivysaur.gltf");
