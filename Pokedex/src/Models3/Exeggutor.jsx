import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Exeggutor(props) {
  const { nodes, materials } = useGLTF("/Exeggutor.glb");
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
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0102_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.564}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_EyeA.geometry}
          material={materials.BodyA_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_EyeA_1.geometry}
          material={materials.BodyB_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_EyeA_2.geometry}
          material={materials.EyeA_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_EyeA_3.geometry}
          material={materials.EyeB_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_EyeA_4.geometry}
          material={materials.EyeC_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_EyeA_5.geometry}
          material={materials["Mouth_mat.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Exeggutor.glb");
