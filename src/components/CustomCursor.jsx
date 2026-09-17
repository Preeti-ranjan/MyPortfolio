import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 360, damping: 32 });
  const springY = useSpring(y, { stiffness: 360, damping: 32 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(finePointer && !reduceMotion);
    if (!finePointer || reduceMotion) return undefined;

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const over = (event) => setActive(Boolean(event.target.closest('a, button, input, textarea, select')));
    window.addEventListener('pointermove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: springX, y: springY }} />
      <motion.div
        className="cursor-ring"
        style={{ x: springX, y: springY }}
        animate={{ scale: active ? 1.75 : 1, opacity: active ? 0.55 : 0.35 }}
      />
    </>
  );
}
