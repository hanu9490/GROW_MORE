import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import react_logo from "../../../assets/icons/ourtrainings/react-logo.png";

const courses = [
  {
    title: "Full Stack Development",
    description:
      "Learn to build complete web applications from front-end to back-end.",
    image: "https://via.placeholder.com/300", // Replace with your image URL
  },
  {
    title: "Java Programming",
    description: "Master the Java language and develop robust applications.",
    image: "https://via.placeholder.com/300", // Replace with your image URL
  },
  {
    title: "Python Programming",
    description:
      "Dive into Python for data analysis, web development, and more.",
    image: "https://via.placeholder.com/300", // Replace with your image URL
  },
  {
    title: "MERN Stack",
    description: "Become proficient in MongoDB, Express, React, and Node.js.",
    image: "https://via.placeholder.com/300", // Replace with your image URL
  },
];

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
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: { xs: "100%", md: "50%" } }}
              image={react_logo}
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
              <Typography gutterBottom variant="h5" component="div">
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
