import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function Fox() {
	const fox = useGLTF("./Fox/glTF/Fox.gltf");
	const animations = useAnimations(fox.animations, fox.scene);

	useEffect(() => {
		const action = animations.actions.Survey;
		window.setTimeout(() => {
			animations.actions.Run.play();
			animations.actions.Run.crossFadeFrom(animations.actions.Survey, 1);
		}, 2000);
		action.play();
	}, [animations]);
	console.log(fox);
	return (
		<primitive
			object={fox.scene}
			scale={0.02}
			position={[-2.5, 0, 2.5]}
			rotation-y={0.3}
		/>
	);
}

export default Fox;
