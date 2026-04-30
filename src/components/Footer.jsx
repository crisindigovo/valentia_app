import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
} from "@mui/material";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const menuItems = [
    { label: "Contacto", href: "#contacto" },
    { label: "Reserva", href: "#reserva" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre", href: "#sobre" },
    { label: "Ubicaciones", href: "#ubicaciones" },
    { label: "Noticias y Recursos", href: "#noticias" },
  ];

  // TODO: Actualizar con las direcciones reales
  const locations = [
    { name: "Sede Principal", address: "Actualizar dirección, Santiago" },
    { name: "Sede Norte", address: "Actualizar dirección, Santiago" },
  ];

  const handleMenuClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#381d92",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <SelfImprovementIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Centro de Rehabilitación Valentía
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Tratamiento profesional para adicciones en Santiago. Atención
              personalizada, terapias integrales y apoyo 24/7
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Enlaces
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  component="button"
                  onClick={() => handleMenuClick(item.href)}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    opacity: 0.9,
                    textAlign: "left",
                    "&:hover": {
                      opacity: 1,
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Nuestras Sedes
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {locations.map((loc) => (
                <Box key={loc.name} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                  <LocationOnIcon sx={{ fontSize: 18, mt: 0.3, opacity: 0.8, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {loc.name}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.85 }}>
                      {loc.address}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Síguenos
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/p/Centro-de-rehabilitaci%C3%B3n-valentia-61576555484633/",
                    "_blank"
                  )
                }
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/centroderehabilitacionvalentia/",
                    "_blank"
                  )
                }
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Centro de Rehabilitación Valentía.
            Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
