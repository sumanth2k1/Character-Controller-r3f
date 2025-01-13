import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader, PerspectiveCamera } from "@react-three/drei";
import { EcctrlJoystick } from "ecctrl";

function App() {
  return (
    <>
    <EcctrlJoystick buttonNumber={5} />
    <Canvas
      shadows
      // camera={{ position: [4, 7, 3], near: 0.1, fov: 70 }}
    >
      {/* <PerspectiveCamera /> */}
      <color attach="background" args={["#ececec"]} />
      <Experience />
      
    </Canvas>
    <Loader
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
        initialState={(active) => active}
      />
    </>
  );
}

export default App;
