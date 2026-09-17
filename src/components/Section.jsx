import { motion, useReducedMotion } from 'framer-motion';

export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 ${className}`}>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
