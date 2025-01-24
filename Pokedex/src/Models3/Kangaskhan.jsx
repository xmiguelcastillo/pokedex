import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Kangaskhan(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Kangaskhan.glb`,
  );
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
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.501}>
        <primitive object={nodes.pm0113_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0115_00} />
        <skinnedMesh
          geometry={nodes.Kangaskhan_1.geometry}
          material={materials["Material__10.001"]}
          skeleton={nodes.Kangaskhan_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Kangaskhan_2.geometry}
          material={materials["Material__11.001"]}
          skeleton={nodes.Kangaskhan_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.KangaskhanKid_1.geometry}
          material={materials.Material__22}
          skeleton={nodes.KangaskhanKid_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.KangaskhanKid_2.geometry}
          material={materials.Material__23}
          skeleton={nodes.KangaskhanKid_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.KangaskhanKid_3.geometry}
          material={materials.Material__24}
          skeleton={nodes.KangaskhanKid_3.skeleton}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Kangaskhan.glb");
