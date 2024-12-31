import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const DisplayCard = ({ data }) => {
  return (
    <Card sx={{ marginTop: 3 }}>
      <CardContent>
        <Typography variant="h6">Template Preview</Typography>
        <Typography variant="body1">
          <strong>Template Name:</strong> {data.templateName}
        </Typography>
        <Typography variant="body1">
          <strong>Category:</strong> {data.category}
        </Typography>
        <Typography variant="body1">
          <strong>Language:</strong> {data.language}
        </Typography>
        <Typography variant="body1">
          <strong>Header:</strong> {data.header}
        </Typography>
        <Typography variant="body1">
          <strong>Body:</strong> {data.body}
        </Typography>
        <Typography variant="body1">
          <strong>Footer:</strong> {data.footer}
        </Typography>
        {data.mediaFiles &&
          data.mediaFiles.map((file, index) => (
            <Box key={index}>
              {file.type === "image" && <img src={file.url} alt={file.name} width="100%" />}
              {file.type === "video" && <video src={file.url} controls width="100%" />}
              {file.type === "doc" && <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>}
            </Box>
          ))}
      </CardContent>
    </Card>
  );
};

export default DisplayCard;
