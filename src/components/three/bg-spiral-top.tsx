import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

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

function ShaderRing(props: ThreeElements['mesh']) {
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
      <ringGeometry args={[4, 9, 20, 6]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={uniforms}
        wireframe
        vertexShader={`
          uniform float u_time;

          float rand(vec2 co){
            return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
          }

          void main() {
            vec3 p = position.xyz;
            
            // set z to make a cone shape
            p.z += distance(p.xy, vec2(0.0));
            
            // rotate
            float new_x = p.x*cos((u_time / 4.0)) + (p.y*sin((u_time / 4.0)));
            float new_y = p.y*cos((u_time / 4.0)) - (p.x*sin((u_time / 4.0)));
            vec4 modelPosition = modelMatrix * vec4(vec3(new_x, new_y, p.z), 1.0);
            
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

const BgSpiralTop = () => {
  return (
    <StyledBG>
      <Canvas>
        <ShaderRing
          position={[0, 4, -6]}
          rotation={[1, 0, 0]}
          scale={[1.2, 1.2, 1.2]}
        />
      </Canvas>
    </StyledBG>
  );
};

export default BgSpiralTop;
