import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Wind } from 'lucide-react';

export default function HeroTree3D({ onNavigate }) {
  const mountRef = useRef(null);
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isRotating, setIsRotating] = useState(true);
  const [windActive, setWindActive] = useState(true);

  // 3D Parallax & Mouse/Touch Drag Rotation
  useEffect(() => {
    let animId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let autoAngle = 0;

    const handleMouseMove = e => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = y * 8; // degrees
      targetY = x * 12; // degrees
    };

    const handleTouchMove = e => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        targetX = y * 6;
        targetY = x * 10;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const updateLoop = () => {
      if (isRotating) {
        autoAngle += 0.015;
      }
      const idleSwayX = Math.sin(autoAngle) * 3;
      const idleSwayY = Math.cos(autoAngle * 0.8) * 4;

      currentX += (targetX + idleSwayX - currentX) * 0.06;
      currentY += (targetY + idleSwayY - currentY) * 0.06;

      setRotation({ x: currentX, y: currentY });
      animId = requestAnimationFrame(updateLoop);
    };

    animId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animId);
    };
  }, [isRotating]);

  // Three.js Falling Red Maple Leaves & Atmosphere Canvas
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Falling Leaves Particle System
    const leavesCount = 38;
    const leafGeo = new THREE.PlaneGeometry(0.16, 0.22);

    // Crimson shades
    const leafMat1 = new THREE.MeshBasicMaterial({ color: 0x9e2a2b, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
    const leafMat2 = new THREE.MeshBasicMaterial({ color: 0xba3431, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
    const leafMat3 = new THREE.MeshBasicMaterial({ color: 0x7a1816, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
    const materials = [leafMat1, leafMat2, leafMat3];

    const leaves = [];
    for (let i = 0; i < leavesCount; i++) {
      const mesh = new THREE.Mesh(leafGeo, materials[i % 3]);
      mesh.position.set(
        (Math.random() - 0.5) * 5.2,
        1.5 + Math.random() * 3.5,
        (Math.random() - 0.5) * 3.5
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      scene.add(mesh);
      leaves.push({
        mesh,
        speedY: 0.009 + Math.random() * 0.012,
        rotSpeedX: 0.02 + Math.random() * 0.03,
        rotSpeedY: 0.015 + Math.random() * 0.025,
        swaySpeed: 1.4 + Math.random() * 1.8,
        swayAmp: 0.008 + Math.random() * 0.01,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      leaves.forEach(item => {
        if (windActive) {
          item.mesh.position.y -= item.speedY;
          item.mesh.position.x += Math.sin(time * item.swaySpeed + item.phase) * item.swayAmp;
          item.mesh.rotation.x += item.rotSpeedX;
          item.mesh.rotation.y += item.rotSpeedY;

          // Recycle fallen leaf
          if (item.mesh.position.y < -3.5) {
            item.mesh.position.y = 3.6 + Math.random() * 1.5;
            item.mesh.position.x = (Math.random() - 0.5) * 5.0;
            item.mesh.position.z = (Math.random() - 0.5) * 3.5;
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [windActive]);

  return (
    <div
      ref={cardRef}
      className="hero-tree-stage"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        height: 'clamp(320px, 64vw, 560px)',
        perspective: '1200px',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 3D Tilting Tree Stage */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.15s ease-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Japanese Maple Tree Botanical Visual */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translateZ(10px)',
            pointerEvents: 'none',
          }}
        >
          <img
            src="/red-maple-tree.png"
            alt="Ashish Kumawat Japanese Red Maple Bonsai"
            style={{
              width: '92%',
              height: '92%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 40px rgba(40, 20, 15, 0.12))',
              mixBlendMode: 'multiply',
            }}
          />
        </div>

        {/* Three.js Falling Leaves Canvas (Overlay in front) */}
        <div
          ref={mountRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 5,
            transform: 'translateZ(35px)',
          }}
        />

        {/* Hotspot 1: Selected work 03 (Branch hotspot matching Figma) */}
        <button
          onClick={() => onNavigate('work')}
          className="branch-hotspot hotspot-work"
          style={{
            position: 'absolute',
            top: '32%',
            left: '52%',
            transform: 'translate(-50%, -50%) translateZ(45px)',
          }}
          title="Scroll to Selected Work"
        >
          <span>Selected work</span>
          <span className="hotspot-number">03</span>
        </button>

        {/* Hotspot 2: Capabilities 02 */}
        <button
          onClick={() => onNavigate('branches')}
          className="branch-hotspot hotspot-capabilities"
          style={{
            position: 'absolute',
            top: '46%',
            right: '4%',
            transform: 'translateY(-50%) translateZ(45px)',
          }}
          title="Scroll to Capabilities & Branches"
        >
          <span>Capabilities</span>
          <span className="hotspot-number">02</span>
        </button>

        {/* Hotspot 3: Experience 04 */}
        <button
          onClick={() => onNavigate('growth')}
          className="branch-hotspot hotspot-experience"
          style={{
            position: 'absolute',
            bottom: '26%',
            left: '56%',
            transform: 'translate(-50%, 50%) translateZ(45px)',
          }}
          title="Scroll to Experience & Growth Rings"
        >
          <span>Experience</span>
          <span className="hotspot-number">04</span>
        </button>
      </div>

      {/* Interactive Controls Overlay */}
      <div
        className="hero-tree-controls"
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          display: 'flex',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          padding: '6px 14px',
          borderRadius: '9999px',
          border: '1px solid rgba(231, 226, 215, 0.9)',
          boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
          zIndex: 15,
        }}
      >
        <button
          onClick={() => setIsRotating(!isRotating)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: isRotating ? '#9B3230' : '#8A847C',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            gap: '4px',
          }}
          title={isRotating ? 'Pause auto 3D rotation' : 'Resume auto 3D rotation'}
        >
          <RotateCw size={13} />
          <span>{isRotating ? 'Orbiting' : 'Paused'}</span>
        </button>

        <span style={{ color: '#D9D2C5' }}>|</span>

        <button
          onClick={() => setWindActive(!windActive)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: windActive ? '#9B3230' : '#8A847C',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            gap: '4px',
          }}
          title="Toggle wind animation"
        >
          <Wind size={13} />
          <span>{windActive ? 'Breeze' : 'Calm'}</span>
        </button>
      </div>

      {/* Motto on bottom right */}
      <div
        className="hero-tree-motto"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.66rem',
          letterSpacing: '0.12em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          pointerEvents: 'none',
        }}
      >
        EVERY BRANCH, A POSSIBILITY.
      </div>
    </div>
  );
}
