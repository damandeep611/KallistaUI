import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className=" relative mx-auto max-w-7xl px-6 py-24">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className=" max-w-4xl text-5xl font-medium tracking-tight text-white sm:text-7xl uppercase">
            <div>The Present</div>
            <div>Ai acceleration</div>
            <div>Cloud</div>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=" mt-6 max-w-2xl uppercase font-medium tracking-tight text-blue-400 text-4xl sm:text-5xl"
          >
            built on <br /> leading ai <br /> research
          </motion.p>
        </motion.div>
      </div>
      <AnimatedGlobe />
    </section>
  );
}

// animated globe function

const AnimatedGlobe = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    // for cleanup and avoiding memory  leaks
    // storing dom element reference
    const container = globeRef.current;
    renderer.setSize(800, 800);
    // so instead of directly using globeref.current we will use container
    container.appendChild(renderer.domElement);

    // globe shape mesh
    const geometry = new THREE.SphereGeometry(5, 64, 64, 1000); // change the values here for shape modifications
    const material = new THREE.MeshBasicMaterial({
      color: 0x0ccccccc,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    camera.position.z = 10;

    // animation loop
    let AnimationFrameId: number;
    const animate = () => {
      AnimationFrameId = requestAnimationFrame(animate);
      globe.rotation.x += 0; // can also be removed as it is just here incase you to change speed of globe in x dir
      globe.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // cleanup fn
    return () => {
      // cancel animation framer
      cancelAnimationFrame(AnimationFrameId);
      // despose of 3j resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);
  return (
    <motion.div
      ref={globeRef}
      className="absolute right-0 top-1/3 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/4"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  );
};
