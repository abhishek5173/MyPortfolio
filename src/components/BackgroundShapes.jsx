import React from 'react';
import { Box } from '@mui/material';

const BackgroundShapes = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Background Gradient */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4081" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff79b0" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradient1)" />

        {/* Circles */}
        <circle cx="10" cy="10" r="10" fill="#fff" opacity="0.4">
          <animate attributeName="cx" from="10" to="90" dur="20s" repeatCount="indefinite" />
          <animate attributeName="cy" from="10" to="90" dur="25s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="50" r="15" fill="#ff4081" opacity="0.5">
          <animate attributeName="r" from="15" to="30" dur="15s" repeatCount="indefinite" />
          <animate attributeName="cx" from="50" to="70" dur="10s" repeatCount="indefinite" />
        </circle>

        {/* Triangles */}
        <polygon points="30,10 40,30 20,30" fill="#ff79b0" opacity="0.6">
          <animate attributeName="points" values="30,10 40,30 20,30; 70,20 80,40 50,40; 30,10 40,30 20,30" dur="20s" repeatCount="indefinite" />
        </polygon>
        <polygon points="70,60 80,80 60,80" fill="#ff4081" opacity="0.7">
          <animate attributeName="points" values="70,60 80,80 60,80; 50,40 60,60 40,60; 70,60 80,80 60,80" dur="25s" repeatCount="indefinite" />
        </polygon>

        {/* Squares */}
        <rect x="20" y="70" width="20" height="20" fill="#fff" opacity="0.4">
          <animate attributeName="x" from="20" to="80" dur="15s" repeatCount="indefinite" />
          <animate attributeName="y" from="70" to="20" dur="15s" repeatCount="indefinite" />
        </rect>
        <rect x="60" y="20" width="15" height="15" fill="#ff79b0" opacity="0.5">
          <animate attributeName="x" from="60" to="90" dur="20s" repeatCount="indefinite" />
          <animate attributeName="y" from="20" to="70" dur="20s" repeatCount="indefinite" />
        </rect>
      </svg>
    </Box>
  );
};

export default BackgroundShapes;
