import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function App() {
	return (
		<Canvas>
			<Experience />
			<mesh>
				<torusKnotGeometry />
				<meshNormalMaterial />
			</mesh>
		</Canvas>
	);
}

export default App;
