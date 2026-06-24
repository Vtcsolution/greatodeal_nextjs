'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

function ParticleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const prevRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      prevRef.current = { ...mouseRef.current };
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const dx = mouseRef.current.x - prevRef.current.x;
      const dy = mouseRef.current.y - prevRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      const count = Math.min(Math.floor(speed * 0.2) + 1, 4);

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spread = 4 + speed * 0.15;

        particlesRef.current.push({
          x: mouseRef.current.x + Math.cos(angle) * spread,
          y: mouseRef.current.y + Math.sin(angle) * spread,
          size: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.4 + 0.3,
          vx: (Math.random() - 0.5) * 0.6 - dx * 0.04,
          vy: (Math.random() - 0.5) * 0.6 - dy * 0.04 + 0.3,
          life: 0,
          maxLife: Math.random() * 35 + 20,
        });
      }

      if (particlesRef.current.length > 150) {
        particlesRef.current = particlesRef.current.slice(-150);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(p => {
        p.life++;
        if (p.life >= p.maxLife) return false;

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.01;
        p.vx *= 0.99;
        p.vy *= 0.99;

        const progress = p.life / p.maxLife;
        const alpha = p.opacity * (1 - progress * progress);
        const size = p.size * (1 - progress * 0.3);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9997] pointer-events-none"
    />
  );
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dotX = useSpring(cursorX, { damping: 28, stiffness: 350, mass: 0.4 });
  const dotY = useSpring(cursorY, { damping: 28, stiffness: 350, mass: 0.4 });

  const ringX = useSpring(cursorX, { damping: 35, stiffness: 180, mass: 0.8 });
  const ringY = useSpring(cursorY, { damping: 35, stiffness: 180, mass: 0.8 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!visible) setVisible(true);
  }, [cursorX, cursorY, visible]);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener('mousemove', handleMouseMove);

    const hoverIn = () => setIsHovering(true);
    const hoverOut = () => setIsHovering(false);

    const attach = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', hoverIn);
        el.addEventListener('mouseleave', hoverOut);
      });
    };

    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [handleMouseMove, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>

      <ParticleTrail />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border"
          animate={{
            width: isHovering ? 46 : 32,
            height: isHovering ? 46 : 32,
            borderColor: isHovering ? 'rgba(110, 231, 183, 0.5)' : 'rgba(255, 255, 255, 0.15)',
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 8 : 5,
            height: isHovering ? 8 : 5,
            backgroundColor: isHovering ? '#6EE7B7' : '#ffffff',
            opacity: visible ? 0.9 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}
