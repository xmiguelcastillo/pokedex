import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Kingler(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Kingler.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <primitive object={nodes.pm0094_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0096_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.797}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_BodyASpcVco001.geometry}
          material={materials.BodyASpcVco_mat_001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_BodyASpcVco001_1.geometry}
          material={materials.BodyBSpc_mat_001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_BodyASpcVco001_2.geometry}
          material={materials.Eye01_mat_001}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Kingler.glb");
