import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Box } from '@mui/material';
import { motion } from 'framer-motion';
import BackgroundShapes from './BackgroundShapes'; // Import the BackgroundShapes component

const projects = [
  { title: 'Currency-Converter', description: 'A user-friendly Currency Converter app that provides real-time currency conversion with support for multiple currencies. Features live exchange rates, a responsive design, and a clean interface for easy use.', image: 'https://www.warrenasia.com/images/header/blog/11-free-currency-conversion-widget.jpg', link: 'https://currencyconverter-abhishek.vercel.app/' },
  { title: 'Venue-Booking', description: 'Created a dynamic booking platform using the MERN stack, allowing users to reserve venues, check availability, and manage bookings. Features include real-time updates and an admin dashboard for efficient venue management.', image: 'https://blog.eventective.com/wp-content/uploads/2015/10/photodune-5556877-beautiful-outdoor-wedding-venue-m-1080x6751.jpg', link: 'https://link-to-project-2.com' },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 0',
        backgroundColor: '#121212',
        color: '#fff',
        marginTop: '-24px', // Adjust if navbar height is different
      }}
    >
      <BackgroundShapes /> {/* Include the BackgroundShapes component */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)', // Dark overlay for better text contrast
          zIndex: 0,
        }}
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 1rem',
          minHeight: '100vh',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: '700',
              letterSpacing: '1px',
              textAlign: 'center',
              mb: 4,
              color: '#ffffff', // Accent color for title
              position: 'relative',
              display: 'inline-block',
              pb: 2,
            }}
          >
            Projects
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: { xs: '40%', sm: '50%', md: '60%' },
                height: '4px',
                backgroundColor: '#ffffff',
                transform: 'translateX(-50%)',
                borderRadius: '2px',
              }}
            />
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <Card
                  sx={{
                    backgroundColor: '#1e1e1e',
                    transition: 'transform 0.3s ease',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    borderRadius: '8px',
                  }}
                >
                  <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer">
                    <CardMedia
                      component="img"
                      alt={project.title}
                      height="140"
                      image={project.image}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          color: '#ffffff',
                          fontWeight: '600',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#ffffff',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                        }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
