import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Victreebel(props) {
  const { nodes, materials } = useGLTF("/Victreebel.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0035_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.214}>
        <primitive object={nodes.pm0042_00_golbat} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0060_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[0, 0, -51.962]} rotation={[0, Math.PI / 2, 0]}>
          <primitive object={nodes._04_Hips_1} />
          <primitive object={nodes._16_Spine1} />
          <skinnedMesh
            geometry={nodes.Victreebel_1.geometry}
            material={materials["BodyVco.001"]}
            skeleton={nodes.Victreebel_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Victreebel_2.geometry}
            material={materials["Eye.027"]}
            skeleton={nodes.Victreebel_2.skeleton}
          />
        </group>
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
      <primitive object={nodes.pm0026_00_raichu} />
      <primitive object={nodes.pm0029_00} />
      <primitive object={nodes.pm0030_00} />
      <primitive object={nodes.pm0031_00} />
      <primitive object={nodes.pm0032_00} />
      <primitive object={nodes.pm0033_00} />
      <primitive object={nodes._03_Waist} />
      <primitive object={nodes.pm0065_00_foodin} />
      <primitive object={nodes.pm0066_00} />
      <primitive object={nodes.pm0067_00} />
      <primitive object={nodes.pm0068_00} />
      <primitive object={nodes.pm0070_00} />
    </group>
  );
}

useGLTF.preload("/Victreebel.glb");
