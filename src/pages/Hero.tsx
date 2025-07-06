import React, { useRef, useState } from 'react';
import '../styles/Hero.css';  
import Logo from '../components/logo';
import StatsSection from '../components/StatsSection';
import "../App.css"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDLogo from '../components/ThreeDLogo';
// import ThreeDLogo from '../components/ThreeDLogo';
import odc3d from '../assets/images/odc-3d-without-bg.png';

const Hero = () => {
  // 3D image effect state
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [baseAngle, setBaseAngle] = useState(0);

  // Responsive: detect mobile
  const [isMobile, setIsMobile] = useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 700);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Continuous rotation
  React.useEffect(() => {
    const animate = () => {
      if (!isHovering) {
        setBaseAngle((prev) => prev + 0.2); // slow continuous rotation
        setScale(1); // reset scale when not hovering
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovering]);

  // Mouse move 3D effect + scale
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max 20deg rotation
    const rotateY = ((x - centerX) / centerX) * 20;
    const rotateX = -((y - centerY) / centerY) * 20;
    // Scale up as cursor moves away from center (max 1.15)
    const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
    const scaleVal = 1 + Math.min(dist / maxDist, 1) * 0.15;
    setRotation({ x: rotateX, y: rotateY });
    setScale(scaleVal);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
    setScale(1);
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Compose transform
  const transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y + baseAngle}deg) scale(${scale})`;

  return (
    <div className={`hero-container${isMobile ? ' hero-mobile' : ''}`}>
      {/* 3D Interactive Image - above content on mobile, right on desktop */}
      <div
        className={`hero-3d-image-container${isMobile ? ' hero-3d-image-mobile' : ''}`}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{}}
      >
        <img
          src={"/src/assets/images/odc-3d-without-bg.png"}
          alt="3D ODC Logo"
          className="hero-3d-image"
          style={{
            transform,
            transition: isHovering ? 'transform 0.18s cubic-bezier(.25,.8,.25,1)' : 'transform 1.2s cubic-bezier(.25,.8,.25,1)',
            willChange: 'transform',
          }}
          draggable={false}
        />
      </div>
      <div className="hero-content">
        <div className='hero-subtitle'>
         THE
         <span className="hero-title"> OPEN SOURCE</span> 
        </div>
        <h3 className="hero-subtitle">
          COMMUNITY OF 
          <span className='dcrust'>  DCRUST</span>
        </h3>
        <div className="hero-actions">
          <p className="hero-description">
           For the first time in history, for students of DCRUST contributing to open source are going to have a community altogether.
           <br />
          <span>DCRUST Open-source Developers Community</span>
          </p>
           <Logo/>
         <StatsSection/>
        </div>
      </div>
      {/* Background gradient effect */}
      <div className="hero-bg-gradient"></div>
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} style={{ width: '100%', height: '100%' }}>
        <ThreeDLogo />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
};

export default Hero;
