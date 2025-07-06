import React, { useRef, useEffect } from 'react';

const MovingGrid = ({
  lineColor = 'rgba(255,255,255,0.07)',
  lineWidth = 1,
  spacing = 40,
  speed = 0.2,
  style = {},
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const offset = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      // Vertical lines
      for (let x = -spacing + (offset.current % spacing); x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      // Horizontal lines
      for (let y = -spacing + (offset.current % spacing); y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    function animate() {
      offset.current += speed;
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    // Resize handler
    function handleResize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [lineColor, lineWidth, spacing, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
};

export default MovingGrid; 