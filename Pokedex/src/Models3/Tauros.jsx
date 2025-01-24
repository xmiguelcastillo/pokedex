import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tauros(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Tauros.glb`);
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
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.344}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_1_Body001.geometry}
          material={materials["Body_mat.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_1_Body001_1.geometry}
          material={materials["Eye_mat.016"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_7_BodySpc.geometry}
        material={materials["BodySpc_mat.002"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.344}
      />
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0127_00} />
    </group>
  );
}

useGLTF.preload("/Tauros.glb");
