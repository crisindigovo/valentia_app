import { Box } from '@mui/material';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import GallerySection from '../components/GallerySection';
import ServicesSection from '../components/ServicesSection';
import ReserveSection from '../components/ReserveSection';
import NewsSection from '../components/NewsSection';
import ContactForm from '../components/ContactForm';
import LocationsSection from '../components/LocationsSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <HeroSection />
      <MissionSection />
      <GallerySection />
      <ServicesSection />
      <ReserveSection />
      <NewsSection />
      <ContactForm />
      <LocationsSection />
      <Footer />
    </Box>
  );
};

export default LandingPage;
