'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const numberPaths: Record<number, string> = {
  1: 'M 50 20 L 50 80',
  2: 'M 25 30 Q 25 15 50 15 Q 75 15 75 30 Q 75 50 50 55 L 25 80 L 75 80',
  3: 'M 25 20 L 75 20 L 50 45 Q 75 45 75 60 Q 75 80 50 80 Q 25 80 25 70',
  4: 'M 60 80 L 60 15 L 20 60 L 80 60',
  5: 'M 70 15 L 30 15 L 25 45 Q 50 35 70 45 Q 80 55 65 75 Q 50 85 25 75',
};

export default function NumberTracing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [strokeCount, setStrokeCount] = useState(0);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGuide(ctx, currentNumber);
  }, [currentNumber]);

  useEffect(() => { clearCanvas(); }, [clearCanvas]);

  function drawGuide(ctx: CanvasRenderingContext2D, num: number) {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    ctx.save();
    ctx.font = `bold ${h * 0.7}px var(--font-fredoka), Fredoka, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = 'rgba(76, 201, 240, 0.15)';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 8]);
    ctx.strokeText(String(num), w / 2, h / 2);
    ctx.restore();
  }

  function getPos(e: React.TouchEvent | React.MouseEvent) {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    return { x: (clientX - rect.left) * (canvas.width / rect.width), y: (clientY - rect.top) * (canvas.height / rect.height) };
  }

  function startDraw(e: React.TouchEvent | React.MouseEvent) {
    e.preventDefault();
    setIsDrawing(true);
    const pos = getPos(e);
    if (!pos) return;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.strokeStyle = '#4cc9f0';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.setLineDash([]);
  }

  function draw(e: React.TouchEvent | React.MouseEvent) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    if (!pos) return;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function endDraw() {
    setIsDrawing(false);
    setStrokeCount((p) => {
      const next = p + 1;
      if (next >= 3) {
        setShowCelebration(true);
        setTimeout(() => {
          setShowCelebration(false);
          setStrokeCount(0);
          setCurrentNumber((n) => (n % 5) + 1);
        }, 2000);
      }
      return next;
    });
  }

  return (
    <div className="text-center">
      <div className="flex justify-between items-center mb-4">
        <span className="font-display font-bold text-lg">✏️ Number Tracing</span>
        <span className="font-numerals text-candy-sunshine text-2xl">{currentNumber}</span>
      </div>
      <p className="font-display text-lg mb-4">Trace the number <span className="text-candy-cyan font-numerals text-3xl">{currentNumber}</span> with your finger!</p>

      <div className="relative mx-auto" style={{ maxWidth: '400px' }}>
        <canvas ref={canvasRef} width={400} height={400}
          className="w-full aspect-square bg-cosmic-deep/50 rounded-2xl border-2 border-dashed border-candy-cyan/20 cursor-crosshair touch-none"
          onMouseDown={startDraw} onMouseMove={draw} onMouseUp={endDraw} onMouseLeave={endDraw}
          onTouchStart={startDraw} onTouchMove={draw} onTouchEnd={endDraw} />
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button onClick={clearCanvas} className="px-4 py-2 rounded-full bg-white/10 font-display text-sm hover:bg-white/20 transition-colors">Clear ✨</button>
        <div className="flex gap-1">
          {[1,2,3,4,5].map((n) => (
            <button key={n} onClick={() => { setCurrentNumber(n); setStrokeCount(0); setTimeout(clearCanvas, 50); }}
              className={`w-10 h-10 rounded-full font-numerals font-bold text-lg transition-all ${currentNumber === n ? 'bg-candy-cyan text-cosmic-deep' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}>{n}</button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showCelebration && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: 3, duration: 0.3 }} className="text-4xl">⭐</motion.div>
            <p className="font-display font-bold text-candy-sunshine">Perfect Tracing!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
