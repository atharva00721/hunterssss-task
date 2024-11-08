import * as React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { vertex, fragment } from "./Shader";
import { useTexture, useAspect } from "@react-three/drei";
import useMouse from "@/hooks/useMouse";
import useDimension from "@/hooks/useDimension";
import { projects } from "./data";

export default function Model({ activeProject }) {
  const plane = React.useRef();
  const { viewport } = useThree();
  const dimension = useDimension();
  const mouse = useMouse();
  const opacity = useMotionValue(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const textures = projects.map((project) => useTexture(project.src));
  const { width, height } = textures[0].image;
  const scale = useAspect(width, height / 1.2, 0.225);

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const uniforms = React.useRef({
    uDelta: { value: { x: 0, y: 0 } },
    uTexture: { value: textures[0] },
    uAlpha: { value: 0 },
    uAmplitude: { value: 0.0006 },
  });

  React.useEffect(() => {
    if (activeProject !== null) {
      plane.current.material.uniforms.uTexture.value = textures[activeProject];
      animate(opacity, 1, {
        duration: 0.2,
        onUpdate: (latest) =>
          (plane.current.material.uniforms.uAlpha.value = latest),
      });
    } else {
      animate(opacity, 0, {
        duration: 0.2,
        onUpdate: (latest) =>
          (plane.current.material.uniforms.uAlpha.value = latest),
      });
    }
  }, [activeProject, opacity, textures]);

  useFrame(() => {
    const { x, y } = mouse;
    const smoothX = smoothMouse.x.get();
    const smoothY = smoothMouse.y.get();
    smoothMouse.x.set(lerp(smoothX, x.get(), 0.1));
    smoothMouse.y.set(lerp(smoothY, y.get(), 0.1));
    plane.current.material.uniforms.uDelta.value = {
      x: x.get() - smoothX,
      y: -1 * (y.get() - smoothY),
    };
  });

  const x = useTransform(
    smoothMouse.x,
    [0, dimension.width],
    [(-1 * viewport.width) / 2, viewport.width / 2]
  );
  const y = useTransform(
    smoothMouse.y,
    [0, dimension.height],
    [viewport.height / 2, (-1 * viewport.height) / 2]
  );

  return (
    <motion.mesh ref={plane} position-x={x} position-y={y} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      {/* <meshBasicMaterial wireframe={true} color="red" /> */}
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
        transparent={true}
        // wireframe={true}
      />
    </motion.mesh>
  );
}
