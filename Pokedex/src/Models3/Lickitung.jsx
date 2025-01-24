import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lickitung(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Lickitung.glb`,
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
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.524}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_4_BodyVco.geometry}
          material={materials["Body_mat.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_4_BodyVco_1.geometry}
          material={materials.Eye_mat_001}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Lickitung.glb");
