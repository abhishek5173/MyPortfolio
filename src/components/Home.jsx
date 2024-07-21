import React from 'react';
import { Container, Typography, IconButton, Box, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BackgroundShapes from './BackgroundShapes'; // Import the new component

const Home = () => {
  return (
    <section
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'url(https://source.unsplash.com/random/1920x1080) no-repeat center center/cover',
      }}
    >
      <BackgroundShapes /> {/* Include the BackgroundShapes component */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)', // Overlay for better text contrast
          zIndex: 0,
        }}
      />
      <Container>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h1"
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: 'Montserrat, sans-serif',
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            ABHISHEK KUMAR
          </Typography>
          <Typography
            variant="h2"
            style={{
              fontSize: '2rem',
              fontFamily: 'Montserrat, sans-serif',
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              marginBottom: '1rem',
            }}
          >
            WEB DEVELOPER
          </Typography>
          <Typography
            variant="h5"
            style={{
              fontSize: '1.25rem',
              fontFamily: 'Roboto, sans-serif',
              color: '#fff',
              marginBottom: '2rem',
            }}
          >
            Crafting modern and responsive web applications with a focus on performance and user experience.
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              target="blank"
              href="mailto:rambopranjal63@gmail.com"
              style={{
                margin: '0 10px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                backgroundColor: '#ff4081',
                color: '#fff',
                transition: 'all 0.3s ease',
              }}
            >
              Hire Me
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              href="#projects"
              style={{
                margin: '0 10px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                borderColor: '#ff4081',
                color: '#ff4081',
                transition: 'all 0.3s ease',
              }}
            >
              View Resume
            </Button>
          </Box>
          <Box>
            <IconButton
              href="https://twitter.com/abhish_ek27"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: '0 10px',
                color: '#fff',
                transition: 'color 0.3s ease',
              }}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://instagram.com/abhishekk._27"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: '0 10px',
                color: '#fff',
                transition: 'color 0.3s ease',
              }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://github.com/abhishek5173"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: '0 10px',
                color: '#fff',
                transition: 'color 0.3s ease',
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/abhishek-kumar-103793225"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: '0 10px',
                color: '#fff',
                transition: 'color 0.3s ease',
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="mailto:rambopranjal63@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: '0 10px',
                color: '#fff',
                transition: 'color 0.3s ease',
              }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default Home;
