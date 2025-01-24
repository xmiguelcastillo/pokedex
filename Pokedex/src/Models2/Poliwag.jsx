import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Poliwag(props) {
  const { nodes, materials } = useGLTF("/Poliwag.glb");
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
        <primitive object={nodes.pm0035_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Mesh_1__BodyNyorobon_.geometry}
          material={materials.BodyNyorobon}
          skeleton={nodes.Mesh_1__BodyNyorobon_.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_2__Eye_.geometry}
          material={materials["Eye.004"]}
          skeleton={nodes.Mesh_2__Eye_.skeleton}
        />
        <primitive object={nodes.pm0060_00} />
      </group>
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0150_00} />
      <primitive object={nodes.pm0151_00} />
    </group>
  );
}

useGLTF.preload("/Poliwag.glb");
