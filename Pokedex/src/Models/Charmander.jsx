import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Charmander(props) {
  const { nodes, materials } = useGLTF("/Charmander.gltf");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={100}
        fov={56.738}
        position={[7.359, -4.958, -6.926]}
        rotation={[2.514, 0.71, 0.441]}
      />
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.758}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["Material__34.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["Material__35.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials["Material__36.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Charmander.gltf");
