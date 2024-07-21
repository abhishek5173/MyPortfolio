import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import BackgroundShapes from './BackgroundShapes'; // Import the BackgroundShapes component

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'MongoDB', 'Tailwind', 'MERN'];

const Skills = () => {
  return (
    <section
      id="skills"
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
            Skills
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
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: '#1e1e1e',
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '1.2rem', sm: '1.5rem' },
                      color: '#ffffff',
                      fontWeight: '600',
                    }}
                  >
                    {skill}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
