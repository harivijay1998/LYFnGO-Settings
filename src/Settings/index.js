import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import SettingsHeader from "./Header";
import AddTemplateForm from "./MainContent/AddTemplate";

const Settings = () => {

    const [showCreateTemplate, setShowCreateTemplate] = useState(false);

  const handleCreateNewClick = () => {
    setShowCreateTemplate(true);
  };

  const handleCancelClick = () => {
    setShowCreateTemplate(false);
  };

  return (
    <Box sx={{display:'flex' , alignItems:'start' , gap:'0px'}}>
      <Sidebar />
      {!showCreateTemplate ? (
        <SettingsHeader onCreateNew={handleCreateNewClick} />
      ) : (
        <AddTemplateForm onCancel={handleCancelClick} />
      )}      
    </Box>
  );
};

export default Settings;
