import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cloyster(props) {
  const { nodes, materials } = useGLTF("/Cloyster.glb");
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
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.404}>
        <primitive object={nodes.pm0088_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.366}>
        <primitive object={nodes.pm0089_00} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyA_OptMesh_0_0_node.geometry}
        material={materials.BodyA_mat}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.47}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyBSpcVco_OptMesh_1_0_node.geometry}
        material={materials.BodyBSpcVco_mat}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.47}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eye_OptMesh_2_0_node.geometry}
        material={materials.Eye_mat}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.47}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mouth_OptMesh_3_0_node.geometry}
        material={materials.Mouth_mat}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.47}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyASpc_OptMesh_4_0_node.geometry}
        material={materials.BodyASpc_mat}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.47}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyBSpc_OptMesh_5_0_node.geometry}
        material={materials.BodyBSpc_mat}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.47}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyASpcVco_OptMesh_6_0_node.geometry}
        material={materials.BodyASpcVco_mat}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.47}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyBOmstar_OptMesh_7_0_node.geometry}
        material={materials.BodyBOmstar_mat}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.47}
      />
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
      <primitive object={nodes.pm0079_00} />
      <primitive object={nodes.pm0080_00} />
      <primitive object={nodes.pm0081_00} />
    </group>
  );
}

useGLTF.preload("/Cloyster.glb");
