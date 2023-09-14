"use client";

import { Edges, Grid, OrbitControls } from "@react-three/drei";
import { Canvas, ThreeElements } from "@react-three/fiber";
import { useRef } from "react";

export default function ThreeCanvas() {
  function Box(props: ThreeElements["mesh"]) {
    const ref = useRef<THREE.Mesh>(null!);
    return (
      <group>
        <mesh {...props} ref={ref}>
          <boxGeometry args={[5, 5, 5]} />
          <meshStandardMaterial color={"orange"} />
          <Edges />
        </mesh>
      </group>
    );
  }

  function Ground() {
    const gridConfig = {
      cellSize: 0.5,
      cellThickness: 0.5,
      cellColor: "#fff",
      sectionSize: 3,
      sectionThickness: 1,
      sectionColor: "#fff",
      fadeDistance: 30,
      fadeStrength: 1,
      followCamera: false,
      infiniteGrid: true,
    };
    return (
      <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
    );
  }

  return (
    <Canvas shadows camera={{ position: [3, 7, 9], fov: 60 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Ground />
      <Box position={[0, 2.5, 0]} />
      <OrbitControls />
    </Canvas>
  );
}
