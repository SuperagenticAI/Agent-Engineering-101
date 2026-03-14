import { useEffect, useRef } from 'react';

interface Node {
  x: number; y: number; vx: number; vy: number;
  radius: number; pulse: number; pulseSpeed: number;
}

export function AnimatedCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;

    let id: number;
    let w = 0, h = 0;
    const nodes: Node[] = [];
    const N = 40;
    const DIST = 150;

    function resize() {
      w = c!.width = window.innerWidth;
      h = c!.height = window.innerHeight;
    }

    function init() {
      resize();
      nodes.length = 0;
      for (let i = 0; i < N; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.2 + 0.6,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.012 + 0.006,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < DIST) {
            const a = (1 - d / DIST) * 0.07;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(255, 255, 255, ${a})`;
            ctx!.lineWidth = 0.4;
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        n.pulse += n.pulseSpeed;
        const p = 0.5 + Math.sin(n.pulse) * 0.5;
        const r = n.radius * (1 + p * 0.3);

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${0.03 * p})`;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${0.35 + 0.25 * p})`;
        ctx!.fill();

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      id = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.18 }}
    />
  );
}
