import React, { createContext, useContext, useState } from "react";

const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [templateData, setTemplateData] = useState([]);  
  const [showCreateTemplate, setShowCreateTemplate] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null); 

  const addTemplate = (newTemplate) => {
    setTemplateData((prev) => [...prev, newTemplate]);
    setShowCreateTemplate(false)
  };

  const updateTemplate = (updatedTemplate) => {
    setTemplateData((prevData) => {
      return prevData.map((template) =>
        template.id === updatedTemplate.id ? updatedTemplate : template
      );
    });
    setShowCreateTemplate(false)

  };
  


  return (
    <TemplateContext.Provider value={{ templateData, addTemplate, updateTemplate,setShowCreateTemplate ,showCreateTemplate,setEditingTemplate,editingTemplate}}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplateContext must be used within a TemplateProvider");
  }
  return context;
};
