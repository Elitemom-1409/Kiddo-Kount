'use client';

import { useEffect, useRef } from 'react';

/**
 * CSS-based animated star field for the cosmic background.
 * Generates stars procedurally via canvas for performance.
 * Respects prefers-reduced-motion.
 */
export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      color: string;
    }> = [];

    const colors = [
      'rgba(255, 255, 255,',
      'rgba(76, 201, 240,',
      'rgba(255, 214, 10,',
      'rgba(255, 112, 166,',
      'rgba(6, 214, 160,',
    ];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    }

    function initStars() {
      const count = Math.min(Math.floor((canvas!.width * canvas!.height) / 4000), 300);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    }

    function drawStar(
      ctx: CanvasRenderingContext2D,
      star: (typeof stars)[0],
      time: number
    ) {
      const twinkle = prefersReducedMotion
        ? star.opacity
        : star.opacity * (0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset));

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `${star.color}${twinkle})`;
      ctx.fill();

      // Glow effect for larger stars
      if (star.size > 1.5) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        gradient.addColorStop(0, `${star.color}${twinkle * 0.3})`);
        gradient.addColorStop(1, `${star.color}0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    function animate(time: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        if (!prefersReducedMotion) {
          star.y -= star.speed;
          if (star.y < -5) {
            star.y = canvas.height + 5;
            star.x = Math.random() * canvas.width;
          }
        }
        drawStar(ctx, star, time);
      }

      animationId = requestAnimationFrame(animate);
    }

    resize();
    animationId = requestAnimationFrame(animate);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    />
  );
}
