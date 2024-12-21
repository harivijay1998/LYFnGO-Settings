import React, { useState } from 'react';
import Dashboard from './Dashboard'; 
import SideBar from './SideBar';
import { Box, Typography } from '@mui/material';

const Home = () => {
  const [activeView, setActiveView] = useState(<Dashboard />); 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        overflow: 'hidden',
        maxWidth: '1530px',
        margin: '0 auto',
      }}
    >
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <SideBar setActiveView={setActiveView} />
        <Box
          sx={{
            flexGrow: 1,
            transition: 'margin-left 0.3s ease',
            backgroundColor: '#f5f5f5',
            height: '100%',
            overflowX: 'hidden',
          }}
        >
        </Box>
      </Box>
    </Box>
  );
};

export default Home;