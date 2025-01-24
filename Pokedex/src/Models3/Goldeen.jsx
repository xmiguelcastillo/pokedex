import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Goldeen(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Goldeen.glb`,
  );
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
      <group rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_BodyATattu.geometry}
          material={materials.BodyTosakinto_Fin_mat_001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_BodyATattu_1.geometry}
          material={materials.BodyA_mat_001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_BodyATattu_2.geometry}
          material={materials["Eye_mat_001.001"]}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Goldeen.glb");
