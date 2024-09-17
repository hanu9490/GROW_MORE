import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { keyframes } from "@emotion/react";
import { courses } from "../../../utils/Utils";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TrainingCard = () => {
  return (
    <Grid container spacing={4} justifyContent="center" style={{ padding: 16 }}>
      {courses.map((course, index) => (
        <Grid item xs={12} key={index}>
          <Card
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              backgroundColor: "white",
              width: "100%",
              boxShadow: "none",
              animation: `${fadeIn} 0.5s ease-in-out`,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: { xs: "100%", md: "50%" } }}
              image={course.image}
              alt={course.title}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: { xs: "100%", md: "50%" },
                backgroundColor: "white",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "1.8rem",
                  color: "#3056d3",
                  fontFamily: "Poppins-semi-bold",
                }}
              >
                {course.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "1.2rem" }}
              >
                {course.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TrainingCard;
