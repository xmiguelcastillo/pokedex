import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Spearow(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Spearow.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group
          position={[0, -7.523, -12.78]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        >
          <primitive object={nodes._05_Hips} />
          <primitive object={nodes._35_Spine} />
          <skinnedMesh
            geometry={nodes.Spearow_1.geometry}
            material={materials["BodyA00.002"]}
            skeleton={nodes.Spearow_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Spearow_2.geometry}
            material={materials["Eye.006"]}
            skeleton={nodes.Spearow_2.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Spearow_3.geometry}
            material={materials.BodyB}
            skeleton={nodes.Spearow_3.skeleton}
          />
        </group>
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Spearow.glb");
