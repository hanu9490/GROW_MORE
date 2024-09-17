import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { trainingImages } from "../../../assets/icons/icons";

const SoftwareCoachingCard = () => {
  return (
    <Grid container justifyContent="center" style={{ padding: 16 }}>
      <Grid item xs={12} md={10}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for desktop
            backgroundColor: "white",
            boxShadow: "none",
          }}
        >
          <CardMedia
            component="img"
            image={trainingImages.softwareCloud}
            alt="Software Coaching"
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "auto",
              borderRadius: { xs: 2, md: "none" },
              objectFit: "contain", // Ensures the entire image is visible
            }}
          />
          <CardContent
            sx={{
              padding: 2,
              width: { xs: "100%", md: "50%" }, // Full width on mobile, half on desktop
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              style={{
                color: "#3056d3",
                fontFamily: "Poppins-semi-bold",
              }}
            >
              Master the Tools for Software Development
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{
                fontFamily: "Poppins",
              }}
            >
              In our comprehensive software coaching program, you will learn the
              most important tools and technologies that are essential for
              modern software development. From front-end frameworks like React
              and Bootstrap to back-end technologies like Node.js, Flask, and
              MySQL, our curriculum is designed to give you hands-on experience
              with the latest tools in the industry.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginTop: 1, fontFamily: "Poppins" }}
            >
              Whether you're interested in web development, mobile apps, or
              DevOps, you'll gain the skills necessary to build, deploy, and
              manage software projects of any size. Our coaching includes
              practical projects, real-world scenarios, and expert guidance to
              ensure you become proficient and confident in your software
              development journey.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SoftwareCoachingCard;
