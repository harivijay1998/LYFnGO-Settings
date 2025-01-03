import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useTemplateContext } from "../TemplateContext";
import EditIcon from "@mui/icons-material/Edit"; 

const DisplayCard = ({onEditClick}) => {
  const { templateData } = useTemplateContext();
  const defaultTemplateData = templateData.map((template) => ({
    ...template,
    isActive: template.isActive ?? true,
    isDeleted: template.isDeleted ?? false,
  }));



  console.log("Default Template Data:", defaultTemplateData);

  const [templateType, setTemplateType] = useState("all");
  const [showActive, setShowActive] = useState(true);
  const [showDeleted, setShowDeleted] = useState(false);

  const handleTemplateTypeChange = (event) => {
    setTemplateType(event.target.value);
  };

  const filteredTemplates = defaultTemplateData.filter((template) => {
    if (templateType !== "all" && template.templateType !== templateType)
      return false;
    if (showActive && !template.isActive) return false;
    if (showDeleted && !template.isDeleted) return false;
    return true;
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderBottom: "2px solid #ccc",
          marginBottom: "16px",
        }}
      >
        <Box sx={{ display: "flex", gap: "16px" }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Template Type</InputLabel>
            <Select value={templateType} onChange={handleTemplateTypeChange}>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Communication">Communication</MenuItem>
              <MenuItem value="Diet plan">Diet plan</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant={showActive ? "contained" : "outlined"}
            color="success"
            onClick={() => setShowActive(!showActive)}
            sx={{ position: "relative", left: "10vw", borderRadius: "30px" }}
          >
            Active
          </Button>

          <Button
            variant={showDeleted ? "contained" : "outlined"}
            color="error"
            onClick={() => setShowDeleted(!showDeleted)}
            sx={{
              position: "relative",
              left: "10vw",
              borderRadius: "30px",
            }}
          >
            Deleted
          </Button>
        </Box>

        <Box
          sx={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "8px",
          }}
        >
          <Typography>
            Total Templates: <strong>{filteredTemplates.length}</strong>
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{display:'flex' , justifyContent:'space-between',backgroundColor: "#2dbd96", color: "white" , textAlign:'center' }}>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ backgroundColor: "#2dbd96", color: "white" }}
                    >
                      {template.templateName}
                    </Typography>
                    <Button
                      onClick={() => onEditClick(template)}
                      variant="outlined"
                      color="primary"
                      sx={{ display: "flex", alignItems: "center",borderRadius:'10%'  , backgroundColor:'white'}}
                    >
                      <EditIcon sx={{ fontSize:'15px' , paddingInline:'0px' }} /> 
                      
                    </Button>
                  </Box>
                  <Typography variant="body2" sx={{ paddingBlock: "100px" }}>
                    {template.body}
                  </Typography>
                  <Typography variant="caption" display="block" align="left">
                    ~{template.footer}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              textAlign: "center",
              marginTop: "16px",
              top: "150px",
              position: "relative",
              left: "300px",
            }}
          >
            <img
              src="images/Notemplatesyet.svg"
              alt="No templates available"
              style={{ width: "150px", height: "150px", marginBottom: "8px" }}
            />
            <Typography sx={{ textAlign: "center" }}>
              No templates available for the selected filters.
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default DisplayCard;
