import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Blastoise(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Blastoise.gltf`,
  );
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.412, 0.484, 0.412]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["Material__86.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["Material__87.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials["Material__85.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blastoise_CannonsB.geometry}
        material={materials["Material__86.003"]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.412, 0.484, 0.412]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blastoise_CannonsA.geometry}
        material={materials["Material__86.003"]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.412, 0.484, 0.412]}
      />
    </group>
  );
}

useGLTF.preload("/Blastoise.gltf");
