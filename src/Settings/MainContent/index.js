import React, { useState } from "react";
import AddTemplateForm from "./AddTemplateForm"; // Import the AddTemplateForm component
import DisplayCard from "./DisplayCard"; // Import the DisplayCard component

const TemplateContainer = () => {
  const [templateData, setTemplateData] = useState(null);

  const handleFormSubmit = (data) => {
    setTemplateData(data); // Save form data
  };

  return (
    <div>
      <AddTemplateForm onSubmit={handleFormSubmit} />

      {templateData && <DisplayCard data={templateData} />}
    </div>
  );
};

export default TemplateContainer;
