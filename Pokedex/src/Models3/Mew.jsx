import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mew(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Mew.glb`);
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
      <group scale={0.025}>
        <primitive object={nodes.pm0104_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0105_00} />
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
      <group scale={0.025}>
        <primitive object={nodes.pm0127_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0133_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0134_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0135_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0136_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0142_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0143_00} />
      </group>
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0150_00} />
      <primitive object={nodes.pm0151_00} />
      <primitive object={nodes.neutral_bone} />
      <skinnedMesh
        geometry={nodes.Mew_1.geometry}
        material={materials.Material__62}
        skeleton={nodes.Mew_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Mew_2.geometry}
        material={materials["Material__63.001"]}
        skeleton={nodes.Mew_2.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Mew_3.geometry}
        material={materials["Material__64.001"]}
        skeleton={nodes.Mew_3.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Mew.glb");
