import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pidgeotto(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Pidgeotto.glb`,
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
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group
          position={[0, 1.238, -10.999]}
          rotation={[1.118, Math.PI / 2, 0]}
        >
          <primitive object={nodes._04_Hips} />
          <primitive object={nodes._35_Spine1} />
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.711}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pidgeotto_1.geometry}
          material={materials.BodyA00}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pidgeotto_2.geometry}
          material={materials["Eye.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pidgeotto_3.geometry}
          material={materials.BodyB01}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Pidgeotto.glb");
