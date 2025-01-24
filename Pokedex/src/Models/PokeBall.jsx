import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PokeBall(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}PokeBall.gltf`,
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PokeBall.geometry}
        material={materials.Material__68}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}PokeBall.gltf`);
