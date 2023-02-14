import React, { Suspense } from "react";
import { useGLTF, Clone } from "@react-three/drei";

function Model() {
	const gltf = useGLTF("./ford_mustang_gt.glb");
	return (
		<group>
			<Clone
				object={gltf.scene}
				scale={1}
				position-y={0}
				position-x={-4}
				position-z={0}
				rotation-y={0}
			/>
			<Clone
				object={gltf.scene}
				scale={1}
				position-y={0}
				position-x={0}
				position-z={0}
				rotation-y={0}
			/>
			<Clone
				object={gltf.scene}
				scale={1}
				position-y={0}
				position-x={4}
				position-z={0}
				rotation-y={0}
			/>
		</group>
	);
}

export default Model;

useGLTF.preload("./car13/scene.gltf");
