import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CloseIcon from '@mui/icons-material/Close';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { isAdmin, user } = useAuth();

  const menuItems = [
    { label: 'Contacto', href: '#contacto' },
    { label: 'Reserva', href: '#reserva' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Ubicaciones', href: '#ubicaciones' },
    { label: 'Noticias y Recursos', href: '#noticias' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => handleMenuClick(item.href)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SelfImprovementIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                Centro de Rehabilitación Valentía
              </Typography>
            </Box>

            {isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Tooltip title={isAdmin ? 'Panel Admin' : 'Iniciar sesión'}>
                  <IconButton
                    color="primary"
                    onClick={() => navigate(isAdmin ? '/admin' : '/login')}
                  >
                    {isAdmin ? <AdminPanelSettingsIcon /> : <LoginIcon />}
                  </IconButton>
                </Tooltip>
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleMenuClick(item.href)}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Tooltip title={isAdmin ? 'Panel Admin' : user ? 'Mi cuenta' : 'Iniciar sesión'}>
                  <IconButton
                    color="primary"
                    onClick={() => navigate(isAdmin ? '/admin' : '/login')}
                    sx={{
                      bgcolor: '#f0ecff',
                      '&:hover': { bgcolor: '#e0d8ff' },
                    }}
                  >
                    {isAdmin ? <AdminPanelSettingsIcon /> : <LoginIcon />}
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
