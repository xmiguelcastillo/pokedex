import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lapras(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Lapras.glb`);
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
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.501}>
        <primitive object={nodes.pm0113_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0115_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0116_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.373}>
        <primitive object={nodes.pm0126_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.349}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_6_BodyATattu01.geometry}
          material={materials.BodyATattu00_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_6_BodyATattu01_1.geometry}
          material={materials["Eye_mat.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_6_BodyATattu01_2.geometry}
          material={materials["BodyB_mat.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_6_BodyATattu01_3.geometry}
          material={materials["BodyBVco_mat.001"]}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0127_00} />
    </group>
  );
}

useGLTF.preload("/Lapras.glb");
