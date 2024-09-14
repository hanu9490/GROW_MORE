import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { JobService } from "../../../../services/JobPostingService";
import { useDispatch } from "react-redux";

import { getJobPostingSuccess } from "../../../../redux-store/slices/JobPostingSlice";
const AddJob = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const [active, setActive] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddItem = () => {
    if (currentItem) {
      setItems([...items, currentItem]);
      setCurrentItem("");
    }
  };

  const SubmitJobToServer = async () => {
    const response = await JobService.AddJob({
      title: title,
      overview: items,
      active: active,
    });
    if (response.status === 201) {
      const res = await JobService.GetJob();
      if (res.status === 200) {
        dispatch(getJobPostingSuccess(res.data));
      }
      console.log("Job added successfully");
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    handleClose();
    SubmitJobToServer();
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Job
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" gutterBottom>
            Add Job Details
          </Typography>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
          <Box display="flex" alignItems="center">
            <TextField
              fullWidth
              label="Add Item"
              value={currentItem}
              onChange={(e) => setCurrentItem(e.target.value)}
              margin="normal"
            />
            <IconButton onClick={handleAddItem} color="primary">
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
          <Box>
            {items.map((item, index) => (
              <Typography key={index} variant="body2">
                - {item}
              </Typography>
            ))}
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
              />
            }
            label="Active"
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddJob;
