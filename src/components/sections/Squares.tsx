import { useEffect, useRef, useState } from 'react';

interface GridCell {
  col: number;
  row: number;
  opacity: number;
  maxOpacity: number;
  speed: number;
  state: 'fade-in' | 'fade-out';
}

interface SquaresProps {
  className?: string;
  cellSize?: number; // size of each square in pixels
  speed?: number; // speed of fade animations
  interactive?: boolean;
}

export const Squares = ({
  className = '',
  cellSize = 52,
  speed = 0.015,
  interactive = true,
}: SquaresProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const activeCellsRef = useRef<Map<string, GridCell>>(new Map());
  const mouseTrailRef = useRef<Map<string, { col: number; row: number; opacity: number }>>(new Map());
  const mousePosRef = useRef<{ col: number; row: number; active: boolean }>({ col: -1, row: -1, active: false });

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

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = 1; // standard performance capping

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      activeCellsRef.current.clear();
      mouseTrailRef.current.clear();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // Grid coordinates helper
    const getGridCoords = (e: PointerEvent): { col: number; row: number } => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      return { col, row };
    };

    const handlePointerMove = (e: PointerEvent) => {
      const { col, row } = getGridCoords(e);
      mousePosRef.current = { col, row, active: true };
    };

    const handlePointerLeave = () => {
      mousePosRef.current.active = false;
    };

    if (interactive) {
      container.addEventListener('pointermove', handlePointerMove);
      container.addEventListener('pointerleave', handlePointerLeave);
    }

    const getColors = () => {
      if (typeof window === 'undefined') {
        return {
          gridColor: 'rgba(255,255,255,0.03)',
          cellColorRGB: '189, 0, 255', // violet-glow
        };
      }
      const rootStyle = getComputedStyle(document.documentElement);
      const border = rootStyle.getPropertyValue('--glass-border').trim() || (isDarkTheme ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)');
      
      // Select cell glow color: violet-glow for dark theme, electric for light theme
      const cellRGB = isDarkTheme 
        ? (rootStyle.getPropertyValue('--electric-rgb').trim() || '112, 0, 255')
        : '0, 43, 91'; // --neon in light theme (navy blue)
      return { gridColor: border, cellColorRGB: cellRGB };
    };

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

      const { gridColor, cellColorRGB } = getColors();

      const cols = Math.ceil(w / cellSize);
      const rows = Math.ceil(h / cellSize);

      // 1. Draw Grid Lines
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.55;

      ctx.beginPath();
      // Vertical lines
      for (let c = 0; c <= cols; c++) {
        ctx.moveTo(c * cellSize, 0);
        ctx.lineTo(c * cellSize, h);
      }
      // Horizontal lines
      for (let r = 0; r <= rows; r++) {
        ctx.moveTo(0, r * cellSize);
        ctx.lineTo(w, r * cellSize);
      }
      ctx.stroke();

      // 2. Add random twinkling cells
      const activeCells = activeCellsRef.current;
      if (Math.random() < 0.22 && activeCells.size < 25) {
        const c = Math.floor(Math.random() * cols);
        const r = Math.floor(Math.random() * rows);
        const key = `${c},${r}`;
        if (!activeCells.has(key)) {
          activeCells.set(key, {
            col: c,
            row: r,
            opacity: 0,
            maxOpacity: Math.random() * 0.16 + 0.04,
            speed: (Math.random() * 0.5 + 0.5) * speed,
            state: 'fade-in',
          });
        }
      }

      // 3. Process mouse hover trail
      const mouseTrail = mouseTrailRef.current;
      if (interactive && mousePosRef.current.active) {
        const { col, row } = mousePosRef.current;
        if (col >= 0 && col < cols && row >= 0 && row < rows) {
          const key = `${col},${row}`;
          // Set full glow on hover cell
          mouseTrail.set(key, { col, row, opacity: 0.35 });
        }
      }

      // 4. Draw & Update Random Active Cells
      activeCells.forEach((cell, key) => {
        if (cell.state === 'fade-in') {
          cell.opacity += cell.speed;
          if (cell.opacity >= cell.maxOpacity) {
            cell.opacity = cell.maxOpacity;
            cell.state = 'fade-out';
          }
        } else {
          cell.opacity -= cell.speed;
          if (cell.opacity <= 0) {
            activeCells.delete(key);
            return;
          }
        }

        ctx.fillStyle = `rgba(${cellColorRGB}, ${cell.opacity})`;
        ctx.fillRect(
          cell.col * cellSize + 0.5,
          cell.row * cellSize + 0.5,
          cellSize - 1,
          cellSize - 1
        );
      });

      // 5. Draw & Update Mouse Trail Cells
      mouseTrail.forEach((cell, key) => {
        cell.opacity *= 0.94; // Decay trail
        if (cell.opacity < 0.005) {
          mouseTrail.delete(key);
          return;
        }

        ctx.fillStyle = `rgba(${cellColorRGB}, ${cell.opacity})`;
        ctx.fillRect(
          cell.col * cellSize + 0.5,
          cell.row * cellSize + 0.5,
          cellSize - 1,
          cellSize - 1
        );
      });
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
  }, [cellSize, speed, interactive, isDarkTheme]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};

export default Squares;
