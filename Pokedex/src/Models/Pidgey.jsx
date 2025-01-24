import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pidgey(props) {
  const { nodes, materials } = useGLTF("/Pidgey.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[0, -1.327, 1.845]} rotation={[0.135, 1.57, 0]}>
          <primitive object={nodes.Hips_4} />
          <primitive object={nodes.Spine1_4} />
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group
          position={[0, 1.238, -10.999]}
          rotation={[1.118, Math.PI / 2, 0]}
        >
          <primitive object={nodes._04_Hips} />
          <primitive object={nodes._35_Spine1} />
          <skinnedMesh
            geometry={nodes.Pidgey_1.geometry}
            material={materials.Body00}
            skeleton={nodes.Pidgey_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Pidgey_2.geometry}
            material={materials["Eye.001"]}
            skeleton={nodes.Pidgey_2.skeleton}
          />
        </group>
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Pidgey.glb");
