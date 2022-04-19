import {
  Canvas,
  useLoader,
  useFrame,
  extend,
  useThree,
} from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";
import { Link } from "react-router-dom";

// Make an orbitControls react component
extend({ OrbitControls });

// Provide a default object while loading the model
const Loading = () => {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
};

// Set a customized orbit controller
const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      maxAzimuthAngle={Math.PI / 8}
      maxPolarAngle={(3 * Math.PI) / 5}
      minAzimuthAngle={-Math.PI / 8}
      minPolarAngle={(2 * Math.PI) / 5}
    />
  );
};

// Load in the model
const Model = () => {
  window.createImageBitmap = undefined;
  const gltf = useLoader(GLTFLoader, "/Gameboy3.glb");
  return (
    <>
      <primitive position={[0, 0, 0]} object={gltf.scene} scale={1} />
    </>
  );
};

// Create the 3d scene
const Three = () => {
  return (
    <div className="relative w-full h-full">
      <Canvas>
        <CameraControls />
        <Suspense fallback={<Loading />}>
          <Model />
          <Environment preset="forest" background />
        </Suspense>
      </Canvas>
      <Link
        className={`absolute bottom-0 left-0 bg-green-400 m-10 text-center
          h-14 w-14 flex items-center justify-center rounded-full font-semibold`}
        to="/"
      >
        Back
      </Link>
    </div>
  );
};

export default Three;
