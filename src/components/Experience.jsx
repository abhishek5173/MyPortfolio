import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardHeader, Button } from '@mui/material';
import { motion } from 'framer-motion';
import BackgroundShapes from './BackgroundShapes'; // Import the BackgroundShapes component

const experiences = [
  {
    title: 'Intern at OASIS INFOBYTE',
    duration: 'Jan 2024 - Feb 2024',
    description: 'Developed and maintained dynamic user interfaces with React.js and modern frontend technologies. Partnered closely with design and backend teams to deliver seamless, responsive web applications, enhancing user experience and functionality.',
    certificatesLink: 'https://drive.google.com/file/d/1BE0xw__5Ov1fIHVzN17ekCe6wynG_VaA/view?usp=drive_link',
  },
  {
    title: 'Intern at R.D.S.O (Ministry Of Railways)',
    duration: 'Jun 2024 - Jul 2024',
    description: 'During my internship at the Research Designs and Standards Organisation (RDSO), I contributed to innovative projects in the railway sector. I gained hands-on experience with technologies like MERN and AWS, and collaborated with a team of engineers on developing safety systems and creating a Venue-Booking System. This experience sharpened my technical skills and deepened my understanding of real-world engineering applications, fueling my passion for innovation.',
    certificatesLink: 'https://drive.google.com/file/d/1BI2c81dhbtlqzmLXDMbLjz0qKpbGQwmQ/view?usp=drive_link',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
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
            Experience
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
          {experiences.map((exp, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: '#1e1e1e',
                marginBottom: 2,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '&:last-child': {
                  marginBottom: 0,
                },
              }}
            >
              <CardHeader
                title={exp.title}
                subheader={exp.duration}
                sx={{
                  backgroundColor: '#2c2c2c',
                  color: '#ffffff',
                  padding: '16px',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    color: '#e0e0e0',
                    lineHeight: 1.6,
                  }}
                >
                  {exp.description}
                </Typography>
                <Box sx={{ mt: 2, textAlign: 'right' }}>
                  <Button
                    variant="contained"
                    href={exp.certificatesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#ffffff',
                      color: '#121212',
                      '&:hover': {
                        backgroundColor: '#00c853',
                        color: '#fff',
                      },
                    }}
                  >
                    View Certificates
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
