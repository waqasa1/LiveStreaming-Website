import { Button } from '@mui/material';

export default function GlowingButton({ children }) {
  return (
    <Button
      variant="outlined"
      sx={{
        position: 'relative',
        color: '#fff',
        fontWeight: 'bold',
        px: 13,
        py: 2,
        fontSize: '1rem',
        borderRadius: '30px',
        border: '2px solid transparent',
        backgroundImage: `
          linear-gradient(transparent, transparent),
          linear-gradient(45deg, #8832d1, #11c8d8)
        `,
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
        transition: '0.3s ease-in-out',
        overflow: 'hidden',
        zIndex: 1,
        '&:hover': {
          boxShadow: '0 0 10px #8832d1, 0 0 20px #11c8d8',
        },

        // Glowing border
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'inherit',
          padding: '2px',
          background: 'linear-gradient(90deg, #8832d1, #11c8d8)',
          backgroundSize: '200% 200%',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: -1,
          animation: 'glowBorder 4s linear infinite',
        },

        // White glowing line
        '::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-50%',
          width: '200%',
          height: '100%',
          borderRadius: 'inherit',
          background: `linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          )`,
          animation: 'glowLine 3s linear infinite',
          zIndex: 0,
          opacity: 0.6,
        },

        '@keyframes glowBorder': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },

        '@keyframes glowLine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }}
    >
      {children}
    </Button>
  );
}
