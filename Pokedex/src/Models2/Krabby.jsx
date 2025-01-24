import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Krabby(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Krabby.glb`);
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <primitive object={nodes.pm0094_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0096_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.728}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_6_BodySpc01.geometry}
          material={materials.Body_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_6_BodySpc01_1.geometry}
          material={materials["Eye_mat.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Krabby.glb");
