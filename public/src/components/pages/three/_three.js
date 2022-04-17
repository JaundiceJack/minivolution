import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/Gameboy3.gltf');
  return (
    <>
      <primitive position={[0, 0, 0]} object={gltf.scene} scale={1} />
    </>
  );
};

const Three = () => {
  return (
    <Canvas>
      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Three;
