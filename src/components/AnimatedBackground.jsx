export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid opacity-[0.18]" />
      <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl motion-safe:animate-drift" />
      <div className="absolute bottom-[-12rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-violet/12 blur-3xl motion-safe:animate-drift-slow" />
      <div className="particle-field">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} style={{ '--i': index }} />
        ))}
      </div>
    </div>
  );
}
