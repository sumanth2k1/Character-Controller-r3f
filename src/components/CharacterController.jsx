import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import React, { useState, useEffect, useRef } from "react";
import { Character } from "./Character";
import { KeyboardControls } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Soldier } from "./Soldier";

const characterURL = "/models/character.glb";

export const CharacterController = () => {
  const [animation, setAnimation] = useState("Idle");
  const [speed, setSpeed] = useState(0);
  const velocityRef = useRef([0, 0, 0]); // To store the current velocity
  const characterRef = useRef(); // To reference the RigidBody

  // const keyboardMap = [
  //   { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  //   { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  //   { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  //   { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  //   { name: 'jump', keys: ['Space'] },
  //   { name: 'run', keys: ['Shift'] },
  //   { name: 'action1', keys: ['1'] },
  //   { name: 'action2', keys: ['2'] },
  //   { name: 'action3', keys: ['3'] },
  //   { name: 'action4', keys: ['KeyF'] }
  // ];

  // const animationSet = {
  //   idle: 'Idle',
  //   walk: 'Walk',
  //   run: 'Run',
  //   crouch: 'Crouch',
  //   rifle_run: 'Rifle_run',
  //   rifle_crouch: 'Rifle_crouch',
  //   rifle_stand: 'Rifle_stand',
  // };

  // const updateAnimation = () => {
  //   if (speed > 0.2) {
  //     setAnimation(keyboardMap.some(key => key.name === 'run') ? 'run' : 'walk');
  //   } else {
  //     setAnimation('idle');
  //   }

  //   // Additional logic for other actions, like crouching or rifle stance
  // };

  // useEffect(() => {
  //   updateAnimation();
  // }, [speed]);


  const animationSet = {
    idle: "idle",
    walk: "walk",
    run: "Run",
    jump: "jump_up",
    jumpIdle: "jump_air",
    action2: "dive",
    fall: "fall",
    action1: "wave",
  };

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] }
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (characterRef.current) {
  //       // Get the current velocity
  //       const velocity = characterRef.current.linvel();
  //       const speed = Math.sqrt(
  //         velocity.x ** 2 + velocity.z ** 2 // Horizontal speed
  //       );
  //       setSpeed(speed);

  //       // Update animation based on speed and velocity
  //       if (velocity.y > 0.1) {
  //         setAnimation(animationSet.jump); // Jumping up
  //       } else if (velocity.y < -0.1) {
  //         setAnimation(animationSet.fall); // Falling
  //       } else if (speed > 2) {
  //         setAnimation(animationSet.run); // Running
  //       } else if (speed > 0.1) {
  //         setAnimation(animationSet.walk); // Walking
  //       } else {
  //         setAnimation(animationSet.idle); // Idle
  //       }
  //       console.log(speed,velocity)
  //     }
  //   }, 100); // Update every 100ms
    
  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, [animationSet]);
  
  // console.log(characterRef,speed,velocityRef)

  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Ecctrl animated>
        <EcctrlAnimation
            characterURL={characterURL} // Must have property
            animationSet={animationSet} // Must have property
          >
          {/* <RigidBody colliders={false} restitution={2}> */}
          <Character  scale={0.38} position-y={-0.85} animation={animation} />
          {/* <Soldier  scale={0.38} position-y={-0.85} animation={animation} /> */}
          {/* <CapsuleCollider args={[0.08, 0.18]}/> */}
          {/* </RigidBody> */}
          </EcctrlAnimation>
        </Ecctrl>
      </KeyboardControls>
    </>
  );
};
