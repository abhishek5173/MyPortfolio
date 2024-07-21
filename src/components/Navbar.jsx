import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'transparent', // Transparent background to blend with the Home page
        boxShadow: 'none', // Remove box shadow for a cleaner look
        padding: '10px 20px',
        backdropFilter: 'blur(10px)', // Frosted glass effect
        zIndex: 1200,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#fff',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '1.8rem',
            letterSpacing: '1px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          AK
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              marginLeft: 2,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              borderRadius: '20px',
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: 'rgba(255, 105, 135, 0.5)', // Match the Home page gradient
                color: '#fff',
                transform: 'scale(1.05)',
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              marginLeft: 2,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              borderRadius: '20px',
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: 'rgba(255, 105, 135, 0.5)',
                color: '#fff',
                transform: 'scale(1.05)',
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/projects"
            sx={{
              marginLeft: 2,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              borderRadius: '20px',
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: 'rgba(255, 105, 135, 0.5)',
                color: '#fff',
                transform: 'scale(1.05)',
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/skills"
            sx={{
              marginLeft: 2,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              borderRadius: '20px',
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: 'rgba(255, 105, 135, 0.5)',
                color: '#fff',
                transform: 'scale(1.05)',
              },
            }}
          >
            Skills
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/experience"
            sx={{
              marginLeft: 2,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              borderRadius: '20px',
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: 'rgba(255, 105, 135, 0.5)',
                color: '#fff',
                transform: 'scale(1.05)',
              },
            }}
          >
            Experience
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for dropdown
            color: '#fff',
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
          },
        }}
      >
        <MenuItem onClick={() => handleNavClick('/')} sx={{ '&:hover': { backgroundColor: 'rgba(255, 105, 135, 0.5)', color: '#fff' } }}>Home</MenuItem>
        <MenuItem onClick={() => handleNavClick('/about')} sx={{ '&:hover': { backgroundColor: 'rgba(255, 105, 135, 0.5)', color: '#fff' } }}>About</MenuItem>
        <MenuItem onClick={() => handleNavClick('/projects')} sx={{ '&:hover': { backgroundColor: 'rgba(255, 105, 135, 0.5)', color: '#fff' } }}>Projects</MenuItem>
        <MenuItem onClick={() => handleNavClick('/skills')} sx={{ '&:hover': { backgroundColor: 'rgba(255, 105, 135, 0.5)', color: '#fff' } }}>Skills</MenuItem>
        <MenuItem onClick={() => handleNavClick('/experience')} sx={{ '&:hover': { backgroundColor: 'rgba(255, 105, 135, 0.5)', color: '#fff' } }}>Experience</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
