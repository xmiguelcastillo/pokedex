import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Clefairy(props) {
  const { nodes, materials } = useGLTF("/Clefairy.glb");
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
      <group scale={0.025}>
        <primitive object={nodes.pm0104_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0105_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.501}>
        <primitive object={nodes.pm0113_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0115_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0116_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.373}>
        <primitive object={nodes.pm0126_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0127_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0133_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0134_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0135_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0136_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0142_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0143_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Mesh_1__Body_.geometry}
          material={materials["Body.002"]}
          skeleton={nodes.Mesh_1__Body_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_2__Body_.geometry}
          material={materials["Body.002"]}
          skeleton={nodes.Mesh_2__Body_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_3__Body_.geometry}
          material={materials["Body.002"]}
          skeleton={nodes.Mesh_3__Body_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_4__REye_.geometry}
          material={materials.REye}
          skeleton={nodes.Mesh_4__REye_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_5__Mouth_.geometry}
          material={materials["Mouth.002"]}
          skeleton={nodes.Mesh_5__Mouth_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_6__LEye_.geometry}
          material={materials.LEye}
          skeleton={nodes.Mesh_6__LEye_.skeleton}
        />
        <primitive object={nodes.pm0035_00} />
      </group>
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0150_00} />
      <primitive object={nodes.pm0151_00} />
    </group>
  );
}

useGLTF.preload("/Clefairy.glb");
