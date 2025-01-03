import React, { useRef, useState, useContext } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Stack,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import SearchIcon from "@mui/icons-material/Search";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import { useTemplateContext } from "../TemplateContext";


const AddTemplateForm = (props) => {
  const { addTemplate , updateTemplate} = useTemplateContext(); 
  const { onSubmit, onCancel, data } = props
  console.log('xxxdata',data)
  const editableRef = useRef(null);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [headerType, setHeaderType] = useState("None");

  const formik = useFormik({
    initialValues: {
      templateName: data ? data.templateName : "",  
      templateType: data ? data.templateType : "",
      category: data ? data.category : "",
      language: data ? data.language : "",
      header: data ? data.header : "None",
      body: data ? data.body : "",
      footer: data ? data.footer : "",
    },
    validationSchema: Yup.object({
      templateName: Yup.string().required("Template name is required"),
      templateType: Yup.string().required("Template type is required"),
      category: Yup.string().required("Category is required"),
      language: Yup.string().required("Language is required"),
      body: Yup.string()
        .max(1024, "Body cannot exceed 1024 characters")
        .required("Body is required"),
    }),
    onSubmit: (values) => {
      console.log("Formik onSubmit values:", values); 
      if (data) {
        updateTemplate(values);  
      } else {
        addTemplate(values);
      }
    },
  });
console.log('eee',formik?.errors)
  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);
    setMediaFiles((prev) => [...prev, { url: fileURL, type, name: file.name }]);

    if (editableRef.current) {
      const editor = editableRef.current;
      const content =
        type === "image"
          ? document.createElement("img")
          : type === "video"
          ? document.createElement("video")
          : document.createElement("a");

      content.src = fileURL;
      content.alt = file.name;
      content.controls = type === "video";
      content.href = type === "doc" ? fileURL : undefined;
      content.textContent = type === "doc" ? file.name : undefined;
      content.style.maxWidth = "50%";
      content.style.display = "block";
      content.style.margin = "10px 0";

      editor.appendChild(content);
    }
  };

  const applyFormatting = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: 1000,
        margin: "0 auto",
        borderRadius: 2,
        backgroundColor: "#f5f5f5",
      
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"50px"}
          >
            <Box>
              <TextField
                fullWidth
                label="Template name*"
                name="templateName"
                value={formik.values.templateName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.templateName && Boolean(formik.errors.templateName)
                }
                helperText={
                  formik.touched.templateName && formik.errors.templateName
                }
                sx={{
                  marginBottom: 4,
                  width: "400px",
                  "& .MuiOutlinedInput-root": {
                    height: "30px",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "0 14px",
                  },
                  "& .MuiInputLabel-root": {
                    top: "-9px",
                    fontSize: "14px",
                  },
                  "& .MuiInputLabel-shrink": {
                    top: "0px",
                  },
                }}
              />
              <FormControl
                fullWidth
                sx={{
                  marginBottom: 2,
                  width: "400px",
                  "& .MuiOutlinedInput-root": {
                    height: "30px",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "0px 14px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "14px",
                    top: "-9px",
                  },
                  "& .MuiInputLabel-shrink": {
                    top: "-5px",
                  },
                }}
              >
                <InputLabel>Template Type*</InputLabel>
                <Select
                  name="templateType"
                  value={formik.values.templateType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.templateType && Boolean(formik.errors.templateType)}
                  sx={{
                    marginBottom: 2,
                    width: "400px",
                  }}
                >
                  <MenuItem value="Communication">Communication</MenuItem>
                  <MenuItem value="Diet Plan">Diet Plan</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl
                fullWidth
                sx={{
                  marginBottom: 2,
                  width: "400px",
                  "& .MuiOutlinedInput-root": {
                    height: "30px",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "0px 14px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "14px",
                    top: "-9px",
                  },
                  "& .MuiInputLabel-shrink": {
                    top: "-5px",
                  },
                }}
              >
                <InputLabel>Select Category*</InputLabel>
                <Select
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.category && Boolean(formik.errors.category)}
                  sx={{
                    marginBottom: 2,
                    width: "400px",
                  }}
                >
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Support">Support</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                  marginBottom: 2,
                  width: "400px",
                  "& .MuiOutlinedInput-root": {
                    height: "30px",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "0px 14px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "14px",
                    top: "-9px",
                  },
                  "& .MuiInputLabel-shrink": {
                    top: "-5px",
                  },
                }}
              >
                <InputLabel>Select Language*</InputLabel>
                <Select
                  name="language"
                  value={formik.values.language}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.language && Boolean(formik.errors.language)}
                  sx={{
                    marginBottom: 2,
                    width: "400px",
                  }}
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Spanish">Spanish</MenuItem>
                  <MenuItem value="French">French</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Stack>

        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Header
        </Typography>
        <RadioGroup
          row
          name="header"
          value={formik.values.header}
          onChange={(e) => {
            formik.handleChange(e);
            setHeaderType(e.target.value);
          }}
        >
          <FormControlLabel value="None" control={<Radio />} label="None" />
          <FormControlLabel value="Media" control={<Radio />} label="Media" />
          <FormControlLabel value="Text" control={<Radio />} label="Text" />
        </RadioGroup>

        {headerType === "Media" && (
          <Box sx={{ marginBottom: 2  , textAlign:'right'}}>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none", height: "200px", width: "200px" }}
              id="upload-photo"
              onChange={(e) => handleFileUpload(e, "image")}
            />
            <label htmlFor="upload-photo">
              <IconButton component="span">
                <InsertPhotoIcon />
              </IconButton>
            </label>

            <input
              type="file"
              accept="video/*"
              style={{ display: "none", height: "200px", width: "200px" }}
              id="upload-video"
              onChange={(e) => handleFileUpload(e, "video")}
            />
            <label htmlFor="upload-video">
              <IconButton component="span">
                <VideoLibraryIcon />
              </IconButton>
            </label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              style={{ display: "none" }}
              id="upload-doc"
              onChange={(e) => handleFileUpload(e, "doc")}
            />
            <label htmlFor="upload-doc">
              <IconButton component="span">
                <DescriptionIcon />
              </IconButton>
            </label>
          </Box>
        )}

        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Body*
        </Typography>
        <Box
          ref={editableRef}
          contentEditable
          suppressContentEditableWarning
          onInput={() =>
            formik.setFieldValue("body", editableRef.current.innerText)
          }
          sx={{
            minHeight: "150px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "10px",
            backgroundColor: "#fff",
            fontSize: "16px",
            outline: "none",
            marginBottom: 1,
          }}
        ></Box>
        {formik.touched.body && formik.errors.body && (
          <Typography color="error" variant="caption">
            {formik.errors.body}
          </Typography>
        )}

        <Box textAlign="right" mt={2}>
          <IconButton onClick={() => applyFormatting("bold")}>
            <FormatBoldIcon />
          </IconButton>
          <IconButton onClick={() => applyFormatting("italic")}>
            <FormatItalicIcon />
          </IconButton>
          <Button variant="contained" sx={{ marginLeft: 1 }}>
            Add Variable
          </Button>
        </Box>

        <TextField
          fullWidth
          label="Footer (optional)"
          name="footer"
          value={formik.values.footer}
          onChange={formik.handleChange}
          sx={{ marginTop: 2 }}
        />

        <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
        <Button variant="contained" type="submit">
          {data ? "Update" : "Save"}
        </Button>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddTemplateForm;
