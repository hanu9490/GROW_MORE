import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import Toast from "../../../containers/toast/Toast";
import Loader from "../../../containers/loader/Loader";

const EditJobModal = ({ open, onClose, onSave, job }) => {
  const [title, setTitle] = useState(job.title || "");
  const [items, setItems] = useState(job.overview || []);
  const [currentItem, setCurrentItem] = useState("");
  const [editIndex, setEditIndex] = useState(-1); // Tracks index for editing
  const [active, setActive] = useState(job.active || false);

  let { loading, error } = useSelector((state) => state.job_posting);

  useEffect(() => {
    setTitle(job.title || "");
    setItems(job.overview || []);
    setActive(job.active || false);
  }, [job]);

  const handleAddItem = () => {
    if (currentItem) {
      if (editIndex !== -1) {
        const updatedItems = [...items];
        updatedItems[editIndex] = currentItem;
        setItems(updatedItems);
        setEditIndex(-1); // Reset index after editing
      } else {
        setItems([...items, currentItem]);
      }
      setCurrentItem("");
    }
  };

  const handleEditItem = (index) => {
    setCurrentItem(items[index]);
    setEditIndex(index);
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const updatedJob = {
      ...job,
      title,
      overview: items,
      active,
    };
    onSave(updatedJob);
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
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" gutterBottom>
            Edit Job Details
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
              label="Add/Edit Item"
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
              <Box
                key={index}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Typography variant="body2">{item}</Typography>
                <Box>
                  <IconButton
                    onClick={() => handleEditItem(index)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteItem(index)}
                    color="secondary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      {error && <Toast msg={error} />}
      {loading && <Loader />}
    </>
  );
};

export default EditJobModal;
