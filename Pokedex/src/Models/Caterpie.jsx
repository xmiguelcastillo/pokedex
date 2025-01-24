import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Caterpie(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Caterpie.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[0, -1.327, 1.845]} rotation={[0.135, 1.57, 0]}>
          <skinnedMesh
            geometry={nodes.Caterpie.geometry}
            material={materials["Material__35.002"]}
            skeleton={nodes.Caterpie.skeleton}
          />
          <primitive object={nodes.Hips_4} />
          <primitive object={nodes.Spine1_4} />
        </group>
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Caterpie.glb");
