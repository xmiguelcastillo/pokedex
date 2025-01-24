import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Wartortle(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Wartortle.gltf`,
  );
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={100}
        fov={56.738}
        position={[7.359, -4.958, -6.926]}
        rotation={[2.514, 0.71, 0.441]}
      />
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.487}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["Material__72.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["Material__73.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Wartortle.gltf");
