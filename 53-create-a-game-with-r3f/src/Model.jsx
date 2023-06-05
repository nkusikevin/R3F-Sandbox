import React from "react";
import { useGLTF } from "@react-three/drei";

function Model() {
	const gltf = useGLTF("/porsche.glb");
	return <primitive object={gltf.scene} scale={0.6} position-y={1} />;
}

export default Model;
