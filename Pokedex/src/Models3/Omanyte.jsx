import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Omanyte(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Omanyte.glb`,
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
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.373}>
        <primitive object={nodes.pm0126_00} />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0127_00} />
      <primitive object={nodes.pm0133_00} />
      <primitive object={nodes.pm0134_00} />
      <primitive object={nodes.pm0135_00} />
      <primitive object={nodes.pm0136_00} />
      <primitive object={nodes.pm0138_00} />
      <skinnedMesh
        geometry={nodes.Omanyte_1.geometry}
        material={materials["Material__10.005"]}
        skeleton={nodes.Omanyte_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Omanyte_2.geometry}
        material={materials["Material__11.005"]}
        skeleton={nodes.Omanyte_2.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Omanyte.glb");
