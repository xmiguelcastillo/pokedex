import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Metapod(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Metapod.glb`,
  );
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
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.739}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Metapod_1.geometry}
          material={materials.Material__58}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Metapod_2.geometry}
          material={materials.Material__59}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Metapod.glb");
