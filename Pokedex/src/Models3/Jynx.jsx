import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Jynx(props) {
  const { nodes, materials } = useGLTF("/Jynx.glb");
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
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.329}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_3_Body01.geometry}
          material={materials.Body01_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_3_Body01_1.geometry}
          material={materials["Eye_mat.013"]}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
      <primitive object={nodes.Waist_9} />
    </group>
  );
}

useGLTF.preload("/Jynx.glb");
