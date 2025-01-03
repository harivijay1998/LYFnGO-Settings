import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import SettingsHeader from "./Header";
import DisplayCard from "./MainContent/WhatsApp";
import { useTemplateContext } from "./TemplateContext";
import AddTemplateForm from "./Header/AddTemplate";

const Settings = () => {
  const { templateData, addTemplate,setShowCreateTemplate,showCreateTemplate,setEditingTemplate,editingTemplate } = useTemplateContext();
  const handleCancelClick = () => {
    setShowCreateTemplate(false);
  };
  const handleEditClick = (template) => {
    setEditingTemplate(template);
    setShowCreateTemplate(true); 
  };
  const handleSubmit = (newTemplate) => {
    addTemplate(newTemplate);
    setShowCreateTemplate(false);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 3 }}>
        <SettingsHeader />
        {showCreateTemplate ? (
          <AddTemplateForm
            onCancel={handleCancelClick}
            onSubmit={handleSubmit}
            data={editingTemplate} 
          />
        ) : (
          <Box>
            {templateData.length > 0 ? (
              <DisplayCard onEditClick={(data)=>{
                handleEditClick(data)
              }} />
            ) : (
              <p>No templates available</p>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Settings;
