import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Venonat(props) {
  const { nodes, materials } = useGLTF("/Venonat.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0035_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[0, -11.404, -57.508]} rotation={[1.564, 1.571, 0]}>
          <primitive object={nodes._04_Hips} />
          <primitive object={nodes._89_Spine1} />
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venonat_1.geometry}
          material={materials.BodyABuffron_HairVco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venonat_2.geometry}
          material={materials["Bug.002"]}
        />
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
    </group>
  );
}

useGLTF.preload("/Venonat.glb");
