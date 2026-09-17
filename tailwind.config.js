export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070b',
        panel: '#0b1018',
        line: 'rgba(148, 163, 184, 0.18)',
        cyan: '#38d5ff',
        violet: '#8b5cf6',
        steel: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 36px rgba(56, 213, 255, 0.14)',
      },
    },
  },
  plugins: [],
};
