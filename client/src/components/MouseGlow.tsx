import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-10 transition-all duration-100 ease-out"
      style={{
        width: '400px',
        height: '400px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
        mixBlendMode: 'screen',
      }}
    />
  );
}