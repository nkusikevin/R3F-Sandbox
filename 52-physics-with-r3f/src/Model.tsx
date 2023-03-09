import React from "react";
import { useGLTF } from "@react-three/drei";

function Model() {
	const model = useGLTF("/hamburger.glb");
	return <primitive object={model.scene} scale={0.25} />;
}

export default Model;
