import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function App() {
	return (
		<Canvas
			orthographic
			camera={{
				position: [3, 2, 6],
				fov: 45,
				zoom: 100,
				near: 0.1,
				far: 200,
			}}>
			<Experience />
		</Canvas>
	);
}

export default App;
