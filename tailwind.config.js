export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#06090A',
        surface: 'rgba(255, 255, 255, 0.03)',
        'surface-hover': 'rgba(255, 255, 255, 0.06)',
        'surface-card': 'rgba(255, 255, 255, 0.025)',
        'border-custom': 'rgba(120, 255, 170, 0.08)',
        'border-highlight': 'rgba(57, 255, 136, 0.28)',
        primary: {
          DEFAULT: '#39FF88',
          muted: '#1B4332',
          glow: 'rgba(57, 255, 136, 0.35)',
          subtle: 'rgba(57, 255, 136, 0.12)',
        },
        text: {
          primary: '#F2F5F3',
          secondary: 'rgba(242, 245, 243, 0.62)',
          muted: 'rgba(242, 245, 243, 0.4)',
        }
      },
      borderRadius: {
        DEFAULT: '14px',
        lg: '14px',
        xl: '18px',
        '2xl': '22px',
      },
      boxShadow: {
        'glow-primary': '0 0 24px rgba(57, 255, 136, 0.35)',
        'glow-subtle': '0 0 20px rgba(57, 255, 136, 0.18)',
        'glow-strong': '0 0 32px rgba(57, 255, 136, 0.45)',
        'glow-badge': '0 0 12px rgba(57, 255, 136, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.3em',
      },
      maxWidth: {
        content: '1200px',
      }
    },
  },
  plugins: [],
}
