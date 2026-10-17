"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeDBackgroundProps {
  className?: string;
}

export default function ThreeDBackground({ className = "" }: ThreeDBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for WebGL support
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0); // transparent
    container.appendChild(renderer.domElement);

    // ── Lights ──
    const ambientLight = new THREE.AmbientLight(0xfaf8ff, 0.9);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xf59e0b, 2.5, 40);
    goldPointLight.position.set(10, 8, 12);
    scene.add(goldPointLight);

    const purplePointLight = new THREE.PointLight(0x7c3aed, 2.2, 40);
    purplePointLight.position.set(-10, -8, 10);
    scene.add(purplePointLight);

    // ── 3D Crystal Geometries ──
    const group = new THREE.Group();
    scene.add(group);

    // Crystal 1: Purple Faceted Icosahedron
    const geoIcosa = new THREE.IcosahedronGeometry(2.4, 0);
    const matPurple = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      roughness: 0.25,
      metalness: 0.75,
      flatShading: true,
      transparent: true,
      opacity: 0.75,
    });
    const meshIcosa = new THREE.Mesh(geoIcosa, matPurple);
    meshIcosa.position.set(9.5, 4.5, -4);
    group.add(meshIcosa);

    // Wireframe overlay for meshIcosa
    const wireMatPurple = new THREE.MeshBasicMaterial({
      color: 0xd8b4fe,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireIcosa = new THREE.Mesh(geoIcosa, wireMatPurple);
    wireIcosa.scale.setScalar(1.002);
    meshIcosa.add(wireIcosa);

    // Crystal 2: Champagne Gold Octahedron
    const geoOcta = new THREE.OctahedronGeometry(2.0, 0);
    const matGold = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.3,
      metalness: 0.85,
      flatShading: true,
      transparent: true,
      opacity: 0.72,
    });
    const meshOcta = new THREE.Mesh(geoOcta, matGold);
    meshOcta.position.set(-10.5, -3.5, -3);
    group.add(meshOcta);

    // Wireframe for Octahedron
    const wireMatGold = new THREE.MeshBasicMaterial({
      color: 0xfde68a,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wireOcta = new THREE.Mesh(geoOcta, wireMatGold);
    wireOcta.scale.setScalar(1.002);
    meshOcta.add(wireOcta);

    // Crystal 3: Orbiting Floating Torus Ring
    const geoTorus = new THREE.TorusGeometry(1.6, 0.18, 16, 40);
    const matTorus = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.2,
      metalness: 0.9,
      transparent: true,
      opacity: 0.65,
    });
    const meshTorus = new THREE.Mesh(geoTorus, matTorus);
    meshTorus.position.set(7.5, -5.5, -2);
    meshTorus.rotation.x = Math.PI / 3;
    group.add(meshTorus);

    // Crystal 4: Mini Dodecahedron
    const geoDodec = new THREE.DodecahedronGeometry(1.2, 0);
    const matLavender = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      roughness: 0.3,
      metalness: 0.6,
      flatShading: true,
      transparent: true,
      opacity: 0.6,
    });
    const meshDodec = new THREE.Mesh(geoDodec, matLavender);
    meshDodec.position.set(-8, 5, -5);
    group.add(meshDodec);

    // ── Stardust Particle Constellation ──
    const particlesCount = 70;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 36;
      posArray[i + 1] = (Math.random() - 0.5) * 26;
      posArray[i + 2] = (Math.random() - 0.5) * 16;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.25,
      color: 0xa855f7,
      transparent: true,
      opacity: 0.5,
    });
    const particleMesh = new THREE.Points(particlesGeo, particlesMat);
    group.add(particleMesh);

    // ── Mouse & Animation Interaction ──
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isVisible = true;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0008;
      mouseY = (e.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Intersection Observer to pause animation when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      // Inertia easing
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = targetX * 0.8;
      group.rotation.x = targetY * 0.8;

      // Individual Crystal Rotations
      meshIcosa.rotation.x += 0.005;
      meshIcosa.rotation.y += 0.007;

      meshOcta.rotation.x -= 0.006;
      meshOcta.rotation.y += 0.005;

      meshTorus.rotation.x += 0.008;
      meshTorus.rotation.z += 0.006;

      meshDodec.rotation.y -= 0.006;
      meshDodec.rotation.z += 0.004;

      particleMesh.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Clean up geometries and materials
      geoIcosa.dispose();
      geoOcta.dispose();
      geoTorus.dispose();
      geoDodec.dispose();
      particlesGeo.dispose();

      matPurple.dispose();
      matGold.dispose();
      matTorus.dispose();
      matLavender.dispose();
      wireMatPurple.dispose();
      wireMatGold.dispose();
      particlesMat.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
