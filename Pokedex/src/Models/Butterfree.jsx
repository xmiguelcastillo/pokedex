import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Butterfree(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Butterfree.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group
          position={[0, -0.044, -31.274]}
          rotation={[0.054, Math.PI / 2, 0]}
        >
          <primitive object={nodes.Hips_1} />
          <primitive object={nodes.Spine} />
          <skinnedMesh
            geometry={nodes.ButterfreeF002.geometry}
            material={materials["Material__96.002"]}
            skeleton={nodes.ButterfreeF002.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ButterfreeF002_1.geometry}
            material={materials["Material__97.002"]}
            skeleton={nodes.ButterfreeF002_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ButterfreeF002_2.geometry}
            material={materials["Material__98.002"]}
            skeleton={nodes.ButterfreeF002_2.skeleton}
          />
        </group>
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
    </group>
  );
}

useGLTF.preload("/Butterfree.glb");
