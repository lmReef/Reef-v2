import { Canvas, ThreeElements, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

import { Color } from 'three';
import styled from 'styled-components';

const StyledBG = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
`;

function ShaderPlane(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!);
  const shaderRef = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    [],
  );

  useFrame((state) => {
    const { clock } = state;
    // @ts-ignore
    ref.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh {...props} ref={ref}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={uniforms}
        wireframe
        vertexShader={`
          uniform float u_time;

          // get a semi-random float
          float rand(vec2 co){
            return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
          }

          void main() {
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);

            // make waves by increasing y value (shape is rotated)
            float co = mod(rand(modelPosition.xy), 0.5);
            modelPosition.y += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.2;
            modelPosition.y += sin(modelPosition.y * 4.0 + u_time * 2.0) * 0.15;
            modelPosition.y += cos(modelPosition.z * 6.0 + u_time * 2.0) * co;

            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;

            gl_Position = projectedPosition;
          }
        `}
        fragmentShader={`
          void main() {
            gl_FragColor = vec4(mix(vec3(0.04, 0.1, 0.18), vec3(0.954, 0.857, 0.439), 0.2), 1.0);
          }
      `}
      />
    </mesh>
  );
}

const BgWaves = () => {
  return (
    <StyledBG>
      <Canvas>
        <ShaderPlane
          position={[0, 0, 0]}
          rotation={[-0.75, 0, 0]}
          scale={[40, 40, 1]}
        />
      </Canvas>
    </StyledBG>
  );
};

export default BgWaves;
