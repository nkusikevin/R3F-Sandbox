import React from "react";

function PlaceHolder(props) {
	return (
		<mesh {...props}>
			<boxGeometry args={[1, 1, 1, 2, 2, 2]} />
			<meshBasicMaterial wireframe color='red' />
		</mesh>
	);
}

export default PlaceHolder;
