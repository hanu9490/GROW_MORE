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
    <Grid
      container
      spacing={4}
      justifyContent="center"
      style={{ padding: 16, background: "#f3f4fe" }}
    >
      <Grid item xs={12} style={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography
          variant="h4"
          style={{
            color: "#1A73E8", // Updated color
            fontFamily: "Poppins-bold",
            marginTop: "20px",
            animation: `${fadeIn} 0.6s ease-in-out`,
          }}
        >
          Unlock Your Potential: Explore Our Software Courses
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          style={{
            marginTop: "20px",
            animation: `${fadeIn} 0.8s ease-in-out`,
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          Discover a wide range of courses designed to enhance your skills and
          propel your career in software development.
        </Typography>
      </Grid>

      <Grid item xs={12} style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography
          variant="h4"
          style={{
            fontFamily: "Poppins-semi-bold",
            animation: `${fadeIn} 0.6s ease-in-out`,
          }}
        >
          Why Choose Our Courses?
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          style={{
            marginTop: "20px",
            animation: `${fadeIn} 0.8s ease-in-out`,
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          Our comprehensive curriculum covers fundamental to advanced topics,
          allowing you to apply your knowledge through hands-on projects. Learn
          from industry professionals who bring years of experience directly to
          you.
        </Typography>
      </Grid>

      <Grid item xs={12} style={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography
          variant="h5"
          style={{
            fontFamily: "Poppins-bold",
            marginTop: "20px",
            animation: `${fadeIn} 0.6s ease-in-out`,
          }}
        >
          Get Started Today!
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          style={{ marginTop: "10px", animation: `${fadeIn} 0.8s ease-in-out` }}
        >
          Enroll now and take the first step towards a successful career in
          software development!
        </Typography>
      </Grid>

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
                  color: "#1A73E8", // Updated color
                  fontFamily: "Poppins-semi-bold",
                  animation: `${fadeIn} 0.6s ease-in-out`,
                }}
              >
                {course.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "1.2rem",
                  animation: `${fadeIn} 0.8s ease-in-out`,
                }}
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
