"use client";

import { useEffect, useRef } from "react";

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.8;

    // Globe parameters
    let rotation = 0;
    const dots: Array<{ x: number; y: number; z: number; alpha: number }> = [];

    // Generate dots on sphere surface
    const numDots = 800;
    for (let i = 0; i < numDots; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      dots.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      rotation += 0.003;

      // Draw dots
      dots.forEach((dot) => {
        // Rotate around Y axis
        const rotatedX =
          dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
        const rotatedZ =
          dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation);

        // Only draw dots on the front half
        if (rotatedZ > -0.3) {
          const scale = 1 / (1 - rotatedZ * 0.3);
          const x2d = centerX + rotatedX * radius * scale;
          const y2d = centerY + dot.y * radius * scale;

          // Size based on depth
          const size = (1 + rotatedZ) * 1.5;
          const opacity = dot.alpha * (0.4 + rotatedZ * 0.6);

          // Draw dot
          ctx.beginPath();
          ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${opacity})`; // blue-400
          ctx.fill();

          // Add glow effect for some dots
          if (Math.random() > 0.95) {
            ctx.beginPath();
            ctx.arc(x2d, y2d, size * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(147, 197, 253, ${opacity * 0.3})`; // blue-300
            ctx.fill();
          }
        }
      });

      // Draw latitude lines
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        const y = Math.sin((lat * Math.PI) / 180);
        const circleRadius = Math.cos((lat * Math.PI) / 180) * radius;

        for (let i = 0; i <= 360; i += 3) {
          const angle = (i * Math.PI) / 180;
          const rotatedX =
            Math.cos(angle) * Math.cos(rotation) -
            Math.sin(angle) * Math.sin(rotation);
          const rotatedZ =
            Math.cos(angle) * Math.sin(rotation) +
            Math.sin(angle) * Math.cos(rotation);

          if (rotatedZ > -0.3) {
            const scale = 1 / (1 - rotatedZ * 0.3);
            const x2d = centerX + rotatedX * circleRadius * scale;
            const y2d = centerY + y * radius * scale;

            if (i === 0) {
              ctx.moveTo(x2d, y2d);
            } else {
              ctx.lineTo(x2d, y2d);
            }
          }
        }

        ctx.strokeStyle = `rgba(96, 165, 250, 0.15)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw longitude lines
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath();
        const lonRad = (lon * Math.PI) / 180;

        for (let lat = -90; lat <= 90; lat += 3) {
          const latRad = (lat * Math.PI) / 180;
          const x = Math.cos(latRad) * Math.cos(lonRad);
          const y = Math.sin(latRad);
          const z = Math.cos(latRad) * Math.sin(lonRad);

          const rotatedX = x * Math.cos(rotation) - z * Math.sin(rotation);
          const rotatedZ = x * Math.sin(rotation) + z * Math.cos(rotation);

          if (rotatedZ > -0.3) {
            const scale = 1 / (1 - rotatedZ * 0.3);
            const x2d = centerX + rotatedX * radius * scale;
            const y2d = centerY + y * radius * scale;

            if (lat === -90) {
              ctx.moveTo(x2d, y2d);
            } else {
              ctx.lineTo(x2d, y2d);
            }
          }
        }

        ctx.strokeStyle = `rgba(96, 165, 250, 0.15)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
