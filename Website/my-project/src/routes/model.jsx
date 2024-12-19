import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../VoxMiguel.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="World-Global" rotation={[-Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
          <group name="World-Local" />
          <group name="Controller-Global" position={[0, 17, 0]}>
            <group name="Controller-Local" />
            <group name="Hip-Global" position={[0, 1, 0]} rotation={[-0.076, 0.713, 0.076]}>
              <mesh
                name="Hip-Local"
                castShadow
                receiveShadow
                geometry={nodes['Hip-Local'].geometry}
                material={materials['Hip-Material']}
                position={[0, -5, 0]}
              />
              <group name="Belly-Global" rotation={[0, -0.087, 0]}>
                <group name="Belly-Local" />
                <group name="Chest-Global" rotation={[0.209, -0.14, 0.012]}>
                  <mesh
                    name="Chest-Local"
                    castShadow
                    receiveShadow
                    geometry={nodes['Chest-Local'].geometry}
                    material={materials['Chest-Material']}
                    position={[0, 6, 0]}
                  />
                  <group
                    name="Head-Global"
                    position={[0, 9, -0.5]}
                    rotation={[-0.031, -0.51, 0.061]}>
                    <mesh
                      name="Head-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes['Head-Local'].geometry}
                      material={materials['Head-Material']}
                      position={[0, 11, 0]}
                    />
                  </group>
                  <group
                    name="Left_Arm-Global"
                    position={[-5, 7, -0.5]}
                    rotation={[0.039, -0.201, 1.411]}>
                    <mesh
                      name="Left_Arm-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes['Left_Arm-Local'].geometry}
                      material={materials['L-Arm-Material']}
                      position={[-2, 0, 0]}
                    />
                    <group
                      name="Left_Forearm-Global"
                      position={[-5, 0, 0]}
                      rotation={[0.053, 0.714, -0.1]}>
                      <mesh
                        name="Left_Forearm-Local"
                        castShadow
                        receiveShadow
                        geometry={nodes['Left_Forearm-Local'].geometry}
                        material={materials['L-Forearm-Material']}
                        position={[-2, 0, 0]}
                      />
                      <group
                        name="Left_Hand-Global"
                        position={[-5, 0, 0]}
                        rotation={[-Math.PI / 2, -0.192, 0]}>
                        <mesh
                          name="Left_Hand-Local"
                          castShadow
                          receiveShadow
                          geometry={nodes['Left_Hand-Local'].geometry}
                          material={materials['LeftHand-Material']}
                          position={[-5, 0, -0.5]}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Right_Arm-Global"
                    position={[5, 7, -0.5]}
                    rotation={[0.177, -0.31, -1.241]}>
                    <mesh
                      name="Right_Arm-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes['Right_Arm-Local'].geometry}
                      material={materials['R-Arm-Material']}
                      position={[2, 0, 0]}
                    />
                    <group
                      name="Right_Forearm-Global"
                      position={[5, 0, 0]}
                      rotation={[-0.004, -0.561, -0.091]}>
                      <mesh
                        name="Right_Forearm-Local"
                        castShadow
                        receiveShadow
                        geometry={nodes['Right_Forearm-Local'].geometry}
                        material={materials['R-Forearm-Material']}
                        position={[2, 0, 0]}
                      />
                      <group
                        name="Right_Hand-Global"
                        position={[5, 0, 0]}
                        rotation={[-2.11, -0.185, 0.573]}>
                        <mesh
                          name="Right_Hand-Local"
                          castShadow
                          receiveShadow
                          geometry={nodes['Right_Hand-Local'].geometry}
                          material={materials['RightHand-Material']}
                          position={[5, 0, -0.5]}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Right_Thigh-Global"
                position={[3.5, -2.971, 0.5]}
                rotation={[-0.056, 0.346, 0.068]}>
                <mesh
                  name="Right_Thigh-Local"
                  castShadow
                  receiveShadow
                  geometry={nodes['Right_Thigh-Local'].geometry}
                  material={materials['R-Thigh-Material']}
                  position={[0, -3.5, 0]}
                />
                <group name="Right_Leg-Global" position={[0, -7, -1]} rotation={[0.454, 0, 0]}>
                  <mesh
                    name="Right_Leg-Local"
                    castShadow
                    receiveShadow
                    geometry={nodes['Right_Leg-Local'].geometry}
                    material={materials['R-Leg-Material']}
                    position={[0, -2.5, 0]}
                  />
                  <group
                    name="Right_Foot-Global"
                    position={[0, -6, 0]}
                    rotation={[-0.304, 0.132, -0.068]}>
                    <mesh
                      name="Right_Foot-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes['Right_Foot-Local'].geometry}
                      material={materials['R-Foot-Material']}
                      position={[0, -0.5, 2]}
                    />
                  </group>
                </group>
              </group>
              <group
                name="Left_Thigh-Global"
                position={[-3.5, -3, 0.5]}
                rotation={[-0.179, -0.036, -0.095]}>
                <mesh
                  name="Left_Thigh-Local"
                  castShadow
                  receiveShadow
                  geometry={nodes['Left_Thigh-Local'].geometry}
                  material={materials['L-Thigh-Material']}
                  position={[0, -3.5, 0]}
                />
                <group
                  name="Left_Leg-Global"
                  position={[0, -7, -1]}
                  rotation={[0.348, 0.024, 0.066]}>
                  <mesh
                    name="Left_Leg-Local"
                    castShadow
                    receiveShadow
                    geometry={nodes['Left_Leg-Local'].geometry}
                    material={materials['L-Leg-Material']}
                    position={[0, -2.5, 0]}
                  />
                  <group
                    name="Left_Foot-Global"
                    position={[0, -6, 0]}
                    rotation={[-0.103, -0.424, 0.022]}>
                    <mesh
                      name="Left_Foot-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes['Left_Foot-Local'].geometry}
                      material={materials['L-Foot-Material']}
                      position={[0, -0.5, 2]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../VoxMiguel.gltf')

