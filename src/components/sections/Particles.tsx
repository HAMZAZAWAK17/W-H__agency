import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface ParticlesProps {
  className?: string;
  speed?: number;
  density?: number; // higher value = more particles
  maxDistance?: number;
  mouseRadius?: number;
  interactive?: boolean;
}

export const Particles = ({
  className = '',
  speed = 0.6,
  density = 60, // base count of particles
  maxDistance = 110,
  mouseRadius = 130,
  interactive = true,
}: ParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  // Theme observer
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  // Initialize and loop
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use dpr=1 to ensure high scroll performance
    const dpr = 1;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    // Helper to read CSS theme colors dynamically
    const getColors = () => {
      if (typeof window === 'undefined') return { pColor1: '#00f2ff', pColor2: '#7000ff', lineColor: '112, 0, 255' };
      const rootStyle = getComputedStyle(document.documentElement);
      const neon = rootStyle.getPropertyValue('--neon').trim() || (isDarkTheme ? '#00f2ff' : '#002B5B');
      const electric = rootStyle.getPropertyValue('--electric').trim() || '#7000ff';
      const electricRGB = rootStyle.getPropertyValue('--electric-rgb').trim() || '112, 0, 255';
      return { pColor1: neon, pColor2: electric, lineColor: electricRGB };
    };

    const initParticles = () => {
      const { pColor1, pColor2 } = getColors();
      const area = (canvas.width * canvas.height) / (dpr * dpr);
      const count = Math.min(120, Math.max(20, Math.floor((area / 15000) * (density / 60))));
      
      const newParticles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        newParticles.push({
          x: Math.random() * (canvas.width / dpr),
          y: Math.random() * (canvas.height / dpr),
          vx: (Math.random() - 0.5) * speed * 2,
          vy: (Math.random() - 0.5) * speed * 2,
          radius: Math.random() * 2 + 1,
          color: Math.random() > 0.5 ? pColor1 : pColor2,
        });
      }
      particlesRef.current = newParticles;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    if (interactive) {
      container.addEventListener('pointermove', handlePointerMove);
      container.addEventListener('pointerleave', handlePointerLeave);
    }

    let inView = false;

    const animate = () => {
      if (!inView) {
        requestRef.current = null;
        return;
      }
      requestRef.current = requestAnimationFrame(animate);

      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const { lineColor } = getColors();

      // 1. Update positions
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce walls
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Mouse interaction (pull effect)
        if (interactive && mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius;
            p.x += (dx / dist) * force * 0.45;
            p.y += (dy / dist) * force * 0.45;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // 2. Draw connecting lines
      ctx.lineWidth = 0.55;
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.stroke();
          }
        }

        // Mouse lines
        if (interactive && mouseRef.current.active) {
          const dx = pi.x - mouseRef.current.x;
          const dy = pi.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.22;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.stroke();
          }
        }
      }
    };

    const startLoop = () => {
      if (requestRef.current === null) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    const stopLoop = () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };

    // IntersectionObserver to pause rendering when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasInView = inView;
        inView = entry.isIntersecting;
        if (inView && !wasInView) {
          startLoop();
        } else if (!inView) {
          stopLoop();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(container);

    return () => {
      stopLoop();
      observer.disconnect();
      ro.disconnect();
      if (interactive) {
        container.removeEventListener('pointermove', handlePointerMove);
        container.removeEventListener('pointerleave', handlePointerLeave);
      }
    };
  }, [speed, density, maxDistance, mouseRadius, interactive, isDarkTheme]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};

export default Particles;
