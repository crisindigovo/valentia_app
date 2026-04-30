import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const HeroSection = () => {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '500px', md: '600px' },
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #381d92 0%, #5b3cc4 100%)',
        color: 'white',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            maxWidth: '800px',
            animation: 'fadeInUp 1s ease-out',
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translateY(30px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <HealthAndSafetyIcon sx={{ fontSize: 40 }} />
            <Typography variant="overline" sx={{ fontSize: '1rem', letterSpacing: 2 }}>
              Bienvenido a Valentía
            </Typography>
          </Box>

          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '3.5rem' },
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            En el Centro de Rehabilitación Valentía, te guiamos a superar desafíos físicos y emocionales
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.95,
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            Brindando soluciones efectivas para transformar tu vida con atención personalizada y apoyo integral
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => handleScroll('#sobre')}
              sx={{
                bgcolor: 'white',
                color: '#381d92',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#f5f5f5',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                },
                transition: 'all 0.3s',
              }}
            >
              Descubre más
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => handleScroll('#contacto')}
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Contáctanos
            </Button>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          right: { xs: -50, md: 50 },
          top: '50%',
          transform: 'translateY(-50%)',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          animation: 'pulse 3s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': {
              transform: 'translateY(-50%) scale(1)',
              opacity: 0.5,
            },
            '50%': {
              transform: 'translateY(-50%) scale(1.1)',
              opacity: 0.8,
            },
          },
        }}
      />
    </Box>
  );
};

export default HeroSection;
