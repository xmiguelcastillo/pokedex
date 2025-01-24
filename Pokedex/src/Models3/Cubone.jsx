import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cubone(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Cubone.glb`);
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
      <primitive object={nodes.pm0104_00} />
      <skinnedMesh
        geometry={nodes.Cubone_1.geometry}
        material={materials.Material__139}
        skeleton={nodes.Cubone_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Cubone_2.geometry}
        material={materials.Material__140}
        skeleton={nodes.Cubone_2.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Cubone.glb");
