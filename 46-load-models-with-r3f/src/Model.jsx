import React, { Suspense } from "react";
import { useGLTF, Clone } from "@react-three/drei";

function Model() {
	const car = useGLTF("./car13/scene.gltf");
	console.log(car);
	return (
		<primitive
			object={car.scene}
			// scale={0.02}
			// position={[-2.5, 0, 2.5]}
			// rotation-y={0.3}
		/>
	);
}

export default Model;

useGLTF.preload("./car13/scene.gltf");
