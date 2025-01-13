import React, { useEffect, useMemo, useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Soldier({ animation, ...props }) {
  const group = useRef()
  const { scene, animations } = useGLTF('public/models/soldier.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

    useEffect(() => {
      actions[animation]?.reset().fadeIn(0.24).play();
      return () => actions?.[animation]?.fadeOut(0.24);
    }, [animation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.639}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_36">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="Human_soldier_35" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Soldier_whole} skeleton={nodes.Object_7.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('public/models/soldier.glb')
