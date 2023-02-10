import React from "react";
import * as THREE from "three";
import { useMemo, useRef, useEffect } from "react";

function CustomObjects() {
	const vertiesCount = 10 * 3;

	const geometeryRef = useRef();

	const positions = useMemo(() => {
		const positions = new Float32Array(vertiesCount * 3);
		for (let i = 0; i < vertiesCount * 3; i++) {
			positions[i] = (Math.random() - 0.5) * 3;
		}
		return positions;
	}, []);

	useEffect(() => {
		geometeryRef.current.computeVertexNormals();
	}, [geometeryRef]);

	return (
		<mesh>
			<bufferGeometry ref={geometeryRef}>
				<bufferAttribute
					attach='attributes-position'
					array={positions}
					count={vertiesCount}
					itemSize={3}
				/>
			</bufferGeometry>
			<meshStandardMaterial color='red' side={THREE.DoubleSide} />
		</mesh>
	);
}

export default CustomObjects;
