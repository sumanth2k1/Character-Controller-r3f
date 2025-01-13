import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { useControls } from "leva";
import { Suspense, useRef } from "react";
import { Character } from "./Character";
import { Map } from "./Map";
import { Physics, RigidBody } from "@react-three/rapier";
import { CharacterController } from "./CharacterController";

const maps = {
  castle_on_hills: {
    scale: 6,
    position: [-10, -20, 0],
  },
  animal_crossing_map: {
    scale: 22,
    position: [-15, -1, 10],
  },
  city_scene_tokyo: {
    scale: 0.72,
    position: [-10, -1, -3.5],
  },
  de_dust_2_with_real_light: {
    scale: 0.9,
    position: [-9, -3, 13],
  },
  medieval_fantasy_book: {
    scale: 0.9,
    position: [-7, -3, -6],
  },
};

export const Experience = () => {
  const shadowCameraRef = useRef();
  const { map } = useControls("Map", {
    map: {
      value: "de_dust_2_with_real_light",
      options: Object.keys(maps),
    },
  });

  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
      <Physics>  
      <Suspense key={map} fallback={null}>
        <Map
        
          scale={maps[map].scale}
          position={maps[map].position}
          model={`models/${map}.glb`}
          />
        <CharacterController />
        </Suspense>
      </Physics>
    </>
  );
};
