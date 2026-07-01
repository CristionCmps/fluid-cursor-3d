import { Environment, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

// modelo
const Model = () => {
  const model = useGLTF("./model3d/wolf.glb");

  return (
    <primitive
      position={[0, -1.2, 0]}
      rotation={[0, 0.5, 0]}
      scale={1.5}
      object={model.scene}
    />
  );
};

const Wolf = () => {
  return (
   <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <Environment preset="studio"></Environment>

      <Model></Model>
    </Canvas>
  );
};

export default Wolf;
