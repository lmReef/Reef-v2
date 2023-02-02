import { Canvas, ThreeElements, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';

import styled from 'styled-components';

const StyledBG = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
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
      <planeGeometry args={[1, 1, 16, 16]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={uniforms}
        wireframe
        vertexShader={`
          uniform float u_time;

          void main() {
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            modelPosition.y += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.2;
            
            modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;

            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;

            gl_Position = projectedPosition;
          }
        `}
        fragmentShader={`
          uniform float u_time;

          void main() {
            gl_FragColor = vec4(0, 0, 0, 0.4);
            // gl_FragColor = vec4(0.984, 0.847, 0.439, 0.1);
          }
      `}
      />
    </mesh>
  );
}

const Background1 = () => {
  return (
    <StyledBG>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ShaderPlane position={[0, 0, 0]} scale={[15, 10, 1]} />
      </Canvas>
    </StyledBG>
  );
};

export default Background1;
