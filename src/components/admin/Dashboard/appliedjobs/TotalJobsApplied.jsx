import React, { useEffect, useState } from "react";
import { JobApplicationService } from "../../../../services/JobApplicationSer";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoader,
  fetchJobApplicationsSuccess,
  fetchJobApplicationsFailure,
} from "../../../../redux-store/slices/JobApplicationSlice";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Loader from "../../../containers/loader/Loader";
const TotalJobsApplied = () => {
  const dispatch = useDispatch();
  const { jobApplications, loading, error } = useSelector(
    (state) => state.job_application
  );
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const FetchAppliedJobs = async () => {
      dispatch(setLoader(true));
      try {
        const response = await JobApplicationService.GetAppliedJobs();
        if (response.status === 200) {
          dispatch(fetchJobApplicationsSuccess(response.data));
        }
      } catch (error) {
        dispatch(fetchJobApplicationsFailure(error.message));
      } finally {
        dispatch(setLoader(false));
      }
    };
    FetchAppliedJobs();
  }, [dispatch]);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      dispatch(setLoader(true));
      const response = await JobApplicationService.DeleteAppliedJobs(id);
      if (response.status === 200) {
        let res = await JobApplicationService.GetAppliedJobs();
        dispatch(fetchJobApplicationsSuccess(res.data));
      }
    } catch (error) {
      dispatch(fetchJobApplicationsFailure(error.message));
    }
  };

  const handleOpen = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Grid container spacing={2}>
          {jobApplications?.data?.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job._id}>
              <Card
                variant="outlined"
                onClick={() => handleOpen(job)}
                style={{ cursor: "pointer" }}
              >
                <CardContent>
                  <Typography variant="h6">{job.jobTitle}</Typography>
                  <Typography variant="subtitle1">{job.fullName}</Typography>
                  <Typography color="textSecondary">{job.email}</Typography>
                  <Typography color="textSecondary">{job.phone}</Typography>
                  <Typography variant="body2">
                    Highest Education: {job.highestEducation}
                  </Typography>
                  <Typography variant="body2">
                    Percentage: {job.percentage}%
                  </Typography>
                  <Typography variant="body2">
                    Total Experience: {job.totalExp} years
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the modal
                      handleDelete(job._id);
                    }}
                    style={{ marginTop: "10px" }}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {loading && <Loader />}

      {/* Modal for Job Details */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{selectedJob?.jobTitle}</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            Full Name: {selectedJob?.fullName}
          </Typography>
          <Typography color="textSecondary">
            Email: {selectedJob?.email}
          </Typography>
          <Typography color="textSecondary">
            Phone: {selectedJob?.phone}
          </Typography>
          <Typography variant="body2">
            Highest Education: {selectedJob?.highestEducation}
          </Typography>
          <Typography variant="body2">
            Percentage: {selectedJob?.percentage}%
          </Typography>
          <Typography variant="body2">
            Total Experience: {selectedJob?.totalExp} years
          </Typography>
          <Typography variant="body2" paragraph>
            Cover Letter: {selectedJob?.coverLetter}
          </Typography>
          {selectedJob?.resume && (
            <Typography variant="body2">
              Resume:{" "}
              <a
                href={selectedJob.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TotalJobsApplied;
