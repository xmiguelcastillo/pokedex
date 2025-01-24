import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dugtrio(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Dugtrio.glb`,
  );
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
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[0, 0, -3.693]} rotation={[0, Math.PI / 2, 0]}>
          <primitive object={nodes._05_SpineA1} />
          <primitive object={nodes._12_SpineB1} />
          <primitive object={nodes._20_SpineC1} />
          <skinnedMesh
            geometry={nodes.Dugtrio_1.geometry}
            material={materials["BodyA00.004"]}
            skeleton={nodes.Dugtrio_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Dugtrio_2.geometry}
            material={materials.Eye00}
            skeleton={nodes.Dugtrio_2.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Dugtrio_3.geometry}
            material={materials["BodyB.007"]}
            skeleton={nodes.Dugtrio_3.skeleton}
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
    </group>
  );
}

useGLTF.preload("/Dugtrio.glb");
