import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Chip, Link, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Code, Storage, ShoppingCart, Payment, Dashboard, Api, Security, ChevronLeft, ChevronRight } from '@mui/icons-material';
import carmelaScreenshot1 from '../images/carmela-1.png';
import carmelaScreenshot2 from '../images/carmela-2.png';
import carmelaScreenshot3 from '../images/carmela-3.png';

const CarmelaProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const images = [carmelaScreenshot1, carmelaScreenshot2, carmelaScreenshot3];

  const nextImage = () => {
    setSlideDirection('left');
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSlideDirection('right');
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    if (index > currentImageIndex) {
      setSlideDirection('left');
    } else if (index < currentImageIndex) {
      setSlideDirection('right');
    }
    setCurrentImageIndex(index);
  };

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Carmela Marketplace Platform
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
        A full-stack e-commerce platform for buying and selling products
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ 
              position: 'relative', 
              width: '100%', 
              height: '400px', // Set a fixed height
              overflow: 'hidden',
              borderRadius: '8px',
              mb: 2
            }}>
              {images.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                    transform: index === currentImageIndex ? 'translateX(0)' : 
                              (index < currentImageIndex ? 'translateX(-100%)' : 'translateX(100%)'),
                    opacity: index === currentImageIndex ? 1 : 0,
                    willChange: 'transform, opacity'
                  }}
                />
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', top: '50%', left: 0, right: 0, px: 2 }}>
              <IconButton
                onClick={prevImage}
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  }
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={nextImage}
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  }
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
              {images.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => goToImage(index)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: currentImageIndex === index ? 'primary.main' : 'grey.400',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                />
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              <Chip icon={<Code />} label="React" color="primary" />
              <Chip icon={<Storage />} label="Django" color="secondary" />
              <Chip icon={<Storage />} label="PostgreSQL" />
              <Chip icon={<Api />} label="REST API" />
              <Chip icon={<Security />} label="JWT Authentication" />
              <Chip icon={<Payment />} label="Stripe Integration" />
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Link href="https://github.com/parth3300/Car-mela-frontend" target="_blank" underline="hover">
                Frontend Code
              </Link>
              <Link href="https://github.com/parth3300/Car-mela-Backend" target="_blank" underline="hover">
                Backend Code
              </Link>
              <Link href="https://carmela-buy-and-sell-cars.vercel.app/" target="_blank" underline="hover">
                Live Demo
              </Link>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Project Overview
            </Typography>
            <Typography paragraph>
              Carmela is a full-stack marketplace platform that connects buyers and sellers with a secure,
              scalable solution built with modern technologies. I designed and implemented both the frontend
              and backend architecture from scratch.
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 'bold' }}>
              Key Features
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon><Dashboard /></ListItemIcon>
                <ListItemText primary="User dashboard for buyers and sellers" />
              </ListItem>
              <ListItem>
                <ListItemIcon><ShoppingCart /></ListItemIcon>
                <ListItemText primary="Product listing and search with filters" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Payment /></ListItemIcon>
                <ListItemText primary="Secure payment processing with Stripe" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Security /></ListItemIcon>
                <ListItemText primary="JWT authentication and authorization" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Storage /></ListItemIcon>
                <ListItemText primary="Real-time notifications and messaging" />
              </ListItem>
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 'bold' }}>
              Technical Highlights
            </Typography>
            <Typography paragraph>
              - Built responsive UI with React, Material-UI, and Redux for state management<br />
              - Developed RESTful API with Django REST Framework<br />
              - Implemented PostgreSQL for efficient data storage and complex queries<br />
              - Configured AWS S3 for media storage and CloudFront for CDN<br />
              - Set up CI/CD pipeline with GitHub Actions for automated testing and deployment<br />
              - Optimized performance with caching and database indexing
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Challenges & Solutions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Challenge:</Typography>
              <Typography paragraph>
                Handling concurrent product purchases and inventory management during high traffic.
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Solution:</Typography>
              <Typography>
                Implemented database transactions and optimistic locking to prevent overselling, along with
                a queue system for high-demand products.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Challenge:</Typography>
              <Typography paragraph>
                Ensuring secure payment processing while maintaining a smooth user experience.
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Solution:</Typography>
              <Typography>
                Integrated Stripe Elements for PCI-compliant payment handling and implemented webhooks
                for reliable payment status updates.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CarmelaProject;