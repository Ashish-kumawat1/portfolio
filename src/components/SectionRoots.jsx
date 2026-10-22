import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function DigitalWoodlandCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdce7e8);
    scene.fog = new THREE.Fog(0xdce7e8, 12, 35);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 3.5, 11);
    camera.lookAt(0, 1.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Light
    const ambientLight = new THREE.AmbientLight(0xfff5eb, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffecd2, 2.0);
    sunLight.position.set(8, 14, 6);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    // Ground Plane with gentle hills
    const groundGeo = new THREE.PlaneGeometry(36, 36, 32, 32);
    const gPos = groundGeo.attributes.position;
    for (let i = 0; i < gPos.count; i++) {
      const x = gPos.getX(i);
      const y = gPos.getY(i);
      gPos.setZ(i, Math.sin(x * 0.25) * 0.4 + Math.cos(y * 0.2) * 0.35);
    }
    groundGeo.computeVertexNormals();

    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x5a7846, // lush grass
      roughness: 0.9,
      flatShading: true,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Main Foreground Tree (Japanese Maple)
    const treeGroup = new THREE.Group();
    treeGroup.position.set(0, 0.4, 0);

    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.18, 0.38, 3.2, 8);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3d2b22, roughness: 0.9 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 1.6;
    trunk.castShadow = true;
    treeGroup.add(trunk);

    // Foliage Crown
    const canopyMat = new THREE.MeshStandardMaterial({
      color: 0x9e2a2b, // maple crimson
      roughness: 0.65,
      flatShading: true,
    });
    const crownGeo = new THREE.DodecahedronGeometry(1.6, 1);
    const crown = new THREE.Mesh(crownGeo, canopyMat);
    crown.position.set(0, 3.3, 0);
    crown.scale.set(1.5, 0.9, 1.4);
    crown.castShadow = true;
    treeGroup.add(crown);

    // Extra clusters for foliage spread
    const c1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.0, 1), canopyMat);
    c1.position.set(1.1, 3.1, 0.3);
    c1.scale.set(1.2, 0.8, 1.1);
    treeGroup.add(c1);

    const c2 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.1, 1), canopyMat);
    c2.position.set(-1.0, 3.2, -0.2);
    c2.scale.set(1.1, 0.8, 1.1);
    treeGroup.add(c2);

    scene.add(treeGroup);

    // Background Woodland Trees
    const bgTreeGeo = new THREE.ConeGeometry(1.0, 2.6, 6);
    const bgTreeMat = new THREE.MeshStandardMaterial({ color: 0x486445, roughness: 0.8, flatShading: true });
    const bgTrunkGeo = new THREE.CylinderGeometry(0.1, 0.15, 1.0, 5);

    const bgTrees = [
      { x: -5, z: -4, scale: 0.9 },
      { x: -7, z: -8, scale: 1.2 },
      { x: 4.5, z: -5, scale: 0.8 },
      { x: 7, z: -7, scale: 1.1 },
      { x: -2, z: -10, scale: 1.4 },
      { x: 3, z: -11, scale: 1.3 },
    ];

    bgTrees.forEach(t => {
      const bTrunk = new THREE.Mesh(bgTrunkGeo, trunkMat);
      bTrunk.position.set(t.x, 0.5 * t.scale, t.z);
      bTrunk.scale.set(t.scale, t.scale, t.scale);
      scene.add(bTrunk);

      const bLeaves = new THREE.Mesh(bgTreeGeo, bgTreeMat);
      bLeaves.position.set(t.x, (1.0 + 1.2) * t.scale, t.z);
      bLeaves.scale.set(t.scale, t.scale, t.scale);
      bLeaves.castShadow = true;
      scene.add(bLeaves);
    });

    // Low-poly drifting clouds
    const clouds = [];
    const cloudMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 });
    for (let i = 0; i < 5; i++) {
      const cg = new THREE.Group();
      const numPuffs = 4 + Math.floor(Math.random() * 3);
      for (let j = 0; j < numPuffs; j++) {
        const p = new THREE.Mesh(new THREE.DodecahedronGeometry(0.6 + Math.random() * 0.4, 1), cloudMat);
        p.position.set(j * 0.7, (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.4);
        cg.add(p);
      }
      cg.position.set(-15 + i * 7, 7 + Math.random() * 2, -6 + Math.random() * -6);
      scene.add(cg);
      clouds.push(cg);
    }

    // Interactive mouse & touch drag/look
    let mouse = { x: 0, y: 0 };
    const onMove = e => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    const onTouch = e => {
      if (e.touches && e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -(((e.touches[0].clientY - rect.top) / rect.height) * 2 - 1);
      }
    };
    container.addEventListener('mousemove', onMove);
    container.addEventListener('touchmove', onTouch, { passive: true });

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Cloud drift
      clouds.forEach(cg => {
        cg.position.x += 0.008;
        if (cg.position.x > 18) cg.position.x = -18;
      });

      // Subtle tree breathing/wind sway
      treeGroup.rotation.y = Math.sin(time * 0.5) * 0.08;
      crown.rotation.z = Math.sin(time * 0.8) * 0.04;

      // Mouse camera pan
      camera.position.x += (mouse.x * 2.0 - camera.position.x) * 0.05;
      camera.position.y += (3.5 + mouse.y * 1.0 - camera.position.y) * 0.05;
      camera.lookAt(0, 1.4, 0);

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('touchmove', onTouch);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: 'clamp(260px, 45vw, 380px)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
        border: '1px solid var(--border-light)',
      }}
    />
  );
}

export default function SectionRoots() {
  return (
    <section
      id="roots"
      className="section-responsive"
      style={{
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
          <div className="section-label">
            <span>01 / The Roots</span>
          </div>
          <h2 className="section-title">
            Good things grow<br />
            from good foundations.
          </h2>
        </div>

        {/* Two Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'center',
          }}
          className="roots-grid"
        >
          {/* Left Column: 3D Woodland Canvas */}
          <div>
            <DigitalWoodlandCanvas />
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginTop: '16px',
              }}
            >
              The seed / A digital woodland, reimagined.
            </div>
          </div>

          {/* Right Column: Bio & Core Beliefs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                fontWeight: 400,
              }}
            >
              I’m Ashish, an independent developer at the intersection of design and engineering. I turn early ideas into considered digital experiences — balancing the expressive with the practical, from the first sketch to the final deployment.
            </p>

            {/* Core Values Sub-List */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '28px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-light)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--accent-crimson)' }}>↳</span>
                <span>Design-minded</span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--accent-crimson)' }}>↳</span>
                <span>Detail-driven</span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--accent-crimson)' }}>↳</span>
                <span>Independently yours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
