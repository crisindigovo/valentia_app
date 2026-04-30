import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';

// TODO: Actualizar con las coordenadas/direcciones reales de cada sede
const LOCATIONS = [
  {
    id: 1,
    name: 'Sede Principal',
    badge: 'Sede 1',
    address: 'Actualizar con dirección real',
    city: 'Santiago, Chile',
    phone: '+56 9 XXXX XXXX',
    hours: 'Lun–Vie: 8:00–20:00 · Sáb: 9:00–14:00',
    // Reemplaza con el enlace de Google Maps de la sede real:
    // Puedes obtenerlo desde Google Maps → Compartir → Copiar enlace
    mapsUrl: 'https://maps.google.com/?q=Santiago,Chile',
    color: '#381d92',
  },
  {
    id: 2,
    name: 'Sede Norte',
    badge: 'Sede 2',
    address: 'Actualizar con dirección real',
    city: 'Santiago, Chile',
    phone: '+56 9 XXXX XXXX',
    hours: 'Lun–Vie: 8:00–20:00 · Sáb: 9:00–14:00',
    // Reemplaza con el enlace de Google Maps de la sede real:
    mapsUrl: 'https://maps.google.com/?q=Santiago,Chile',
    color: '#5b3cc4',
  },
];

const LocationsSection = () => {
  return (
    <Box id="ubicaciones" sx={{ py: 10, bgcolor: '#f8f7ff' }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: '#381d92', fontWeight: 600, fontSize: '1rem', letterSpacing: 2 }}
          >
            DÓNDE ESTAMOS
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mt: 2,
              mb: 2,
              color: '#381d92',
              fontSize: { xs: '2rem', md: '2.75rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Nuestras Ubicaciones
          </Typography>
          <Typography
            variant="h6"
            sx={{ maxWidth: '600px', mx: 'auto', color: 'text.secondary', fontWeight: 400, lineHeight: 1.7 }}
          >
            Encuéntranos en nuestras dos sedes en Santiago
          </Typography>
        </Box>

        {/* Tarjetas de ubicación */}
        <Grid container spacing={4} justifyContent="center">
          {LOCATIONS.map((loc) => (
            <Grid item xs={12} md={6} key={loc.id}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: '1px solid rgba(56,29,146,0.12)',
                  height: '100%',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 48px rgba(56,29,146,0.15)',
                  },
                }}
              >
                {/* Cabecera de color */}
                <Box
                  sx={{
                    bgcolor: loc.color,
                    px: 3,
                    py: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    borderRadius: '12px 12px 0 0',
                  }}
                >
                  <LocationOnIcon sx={{ color: 'white', fontSize: 28 }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, lineHeight: 1.2 }}>
                      {loc.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Centro de Rehabilitación Valentía
                    </Typography>
                  </Box>
                  <Chip
                    label={loc.badge}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  {/* Dirección */}
                  <Box sx={{ display: 'flex', gap: 1.5, mb: 2, alignItems: 'flex-start' }}>
                    <LocationOnIcon sx={{ color: loc.color, fontSize: 20, mt: 0.2, flexShrink: 0 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.4 }}>
                        {loc.address}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {loc.city}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Horario */}
                  <Box sx={{ display: 'flex', gap: 1.5, mb: 2, alignItems: 'flex-start' }}>
                    <AccessTimeIcon sx={{ color: loc.color, fontSize: 20, mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {loc.hours}
                    </Typography>
                  </Box>

                  {/* Teléfono */}
                  <Box sx={{ display: 'flex', gap: 1.5, mb: 3, alignItems: 'center' }}>
                    <PhoneIcon sx={{ color: loc.color, fontSize: 20, flexShrink: 0 }} />
                    <Typography
                      component="a"
                      href={`tel:${loc.phone.replace(/\s/g, '')}`}
                      variant="body2"
                      sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: loc.color } }}
                    >
                      {loc.phone}
                    </Typography>
                  </Box>

                  {/* Botón Google Maps */}
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<DirectionsIcon />}
                    onClick={() => window.open(loc.mapsUrl, '_blank', 'noopener,noreferrer')}
                    sx={{
                      bgcolor: loc.color,
                      fontWeight: 600,
                      py: 1.2,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      '&:hover': {
                        bgcolor: loc.id === 1 ? '#2d1778' : '#4a2fa8',
                        transform: 'translateY(-1px)',
                        boxShadow: `0 6px 20px ${loc.color}55`,
                      },
                      transition: 'all 0.2s',
                    }}
                  >
                    Cómo llegar — Google Maps
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LocationsSection;
