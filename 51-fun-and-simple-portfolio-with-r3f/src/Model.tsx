import React from "react";
import { useGLTF, Html } from "@react-three/drei";

function Model() {
	const gltf = useGLTF("/model.gltf");
	return (
		<primitive object={gltf.scene} dispose={null} position-y={-1.5}>
			<Html
				transform
				wrapperClass='htmlScreen'
				distanceFactor={1.17}
				position={[0, 1.56, -1.4]}
				rotation-x={-0.256}>
				<iframe src='https://nkusikevinhart.netlify.app/' />
			</Html>
		</primitive>
	);
}

export default Model;
