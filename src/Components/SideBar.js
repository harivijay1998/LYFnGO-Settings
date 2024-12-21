import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Settings from './Settings';
import Dashboard from './Dashboard';
import Appointments from './Appointments';
import Patients from './Patients';
import Leads from './Leads';
import Pharmarcy from './Pharmarcy';
import Channels from './Channels';
import Inventory from './Inventory';
import Products from './Products';
import Expenses from './Expenses';
import Events from './Events';
import DashboardAI from './DashboardAI';
import Profile from './Profile';
import Consults from './Consults';

const SideBar= ({setActiveView}) => {
  

  const compoList = [
    { id: 1, src: "images/icons_sidebar/Dashboard_icon.svg", alt: "dashboardicon", Component: <Dashboard /> , name:'Dashboard' , color:'#0062dd' },
    { id: 2, src: "images/icons_sidebar/Appointment_icon.svg", alt: "appointmenticon", Component: <Appointments />,name:'Calendar' , color:'#76cf00'},
    { id: 3, src: "images/icons_sidebar/Patients_icon.svg", alt: "patientsicon", Component: <Patients />, name:'Patients', color:'#2eb2ff'},
    { id: 4, src: "images/icons_sidebar/Leads_icon.svg", alt: "leadsicon", Component: <Leads /> ,name:'Leads', color:'#ff0000'},
    { id: 5, src: "images/icons_sidebar/Pharmacy_icon.svg", alt: "pharmacyicon", Component: <Pharmarcy /> ,name:'Pharmacy', color:'#008d00'},
    { id: 6, src: "images/icons_sidebar/Channel_icon.svg", alt: "channelicon", Component: <Channels /> ,name:'Channels', color:'#3498db'},
    { id: 7, src: "images/icons_sidebar/inventory_icon.svg", alt: "inventoryicon", Component: <Inventory /> ,name:'Inventory', color:'#008080'},
    { id: 8, src: "images/icons_sidebar/Product_icon.svg", alt: "producticon", Component: <Products /> ,name:'Product', color:'#f39c12'},
    { id: 9, src: "images/icons_sidebar/Expenses_icon.svg", alt: "expensesicon", Component: <Expenses /> ,name:'Expenses', color:'#e74c3c'},
    { id: 10, src: "images/icons_sidebar/Events_icon.svg", alt: "eventsicon", Component: <Events />,name:'Events' , color:'#0054ab'},
    { id: 11, src: "images/icons_sidebar/Consult_icon.svg", alt: "consultsicon", Component: <Consults /> ,name:'Consults', color:'#e6c100'},
    { id: 12, src: "images/icons_sidebar/Events_icon.svg", alt: "dashboardaiicon", Component: <DashboardAI /> ,name:'Dashboard AI', color:'#14d867'},
    { id: 13, src: "images/icons_sidebar/Settings_icon.svg", alt: "settingsicon", Component: <Settings />,name:'Settings' , color:'#5d5d5d'},
    { id: 14, src: "images/icons_sidebar/Microsite_icon.svg", alt: "profileicon", Component: <Profile /> ,name:'Profile', color:'#02b7a5'},
  ];

  return (
    <Box sx={{ height: '100vh' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
      <Box sx={{ width: '70px', bgcolor: '#f0f0f0', height: '100vh' }}>
        <Box
          sx={{
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          <img
            src="images/icons_sidebar/Care.svg"
            alt="care_icon"
            style={{ height: '70px', width: '70px' }}
          />
        </Box>
        <List>
          {compoList.map((icon) => (
            <ListItem key={icon.id} disablePadding>
              <ListItemButton onClick={() => setActiveView(icon.Component)}>
                <ListItemIcon
                  sx={{
                    display: 'flex',
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent:'center',
                     
                  }}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    style={{ height: '30px', width: '30px' }}
                  />
                  <Typography
                    sx={{
                      color: icon.color,   
                      fontSize: '12px',    
                      marginTop: '5px',    
                    }}
                  >
                    {icon.name}
                  </Typography>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
  
};

export default SideBar;
