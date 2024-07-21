import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import BackgroundShapes from './BackgroundShapes'; // Import the BackgroundShapes component

const About = () => {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 0',
        backgroundColor: '#121212',
        color: '#fff',
        marginTop: '-102px', // Adjust if navbar height is different
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ width: '100%', maxWidth: '800px' }} // Limit the width for readability
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
            About Me
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
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              color: '#e0e0e0',
              lineHeight: 1.6,
              textAlign: 'center',
              px: { xs: 2, sm: 4 }, // Padding adjustments for smaller screens
            }}
          >
            Hi! I’m Abhishek Kumar, a budding software developer excited to dive into the world of tech. I’m new to the industry but have been passionately learning and working with Frontend/Backend. My journey started with Simple TODO-App, and I’m eager to build on that foundation.
            <br /><br />
            I love exploring new programming languages and tools, and I’m always on the lookout for ways to improve and expand my skill set. When I’m not coding, I enjoy Listening to Music, which helps me stay motivated and creative.
            <br /><br />
            Check out my portfolio to see some of the projects I’ve been working on. I’m open to new opportunities and collaborations, so feel free to get in touch if you’d like to connect or chat about tech!
          </Typography>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
