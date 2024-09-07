import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const StatsCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to restart every time it comes into view
  });

  const yearsProps = useSpring({
    from: { number: 0 },
    to: { number: inView ? 7 : 0 },
    config: { duration: 2000 },
  });

  const employeesProps = useSpring({
    from: { number: 0 },
    to: { number: inView ? 759 : 0 },
    config: { duration: 2000 },
  });
  const projectsProps = useSpring({
    from: { number: 0 },
    to: { number: inView ? 456 : 0 },
    config: { duration: 2000 },
  });

  const clientsProps = useSpring({
    from: { number: 0 },
    to: { number: inView ? 789 : 0 },
    config: { duration: 2000 },
  });
  return (
    <Paper
      ref={ref}
      elevation={3}
      sx={{
        padding: 2,
        backgroundColor: "white",
        borderRadius: 2,
        margin: "auto",
        boxShadow: "none",
        marginTop: 5,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
            <Typography variant="h6">Years of Experience</Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              <animated.span>
                {yearsProps.number.to((n) => `${Math.floor(n)}+`)}
              </animated.span>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
            <Typography variant="h6">Employees</Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              <animated.span>
                {employeesProps.number.to((n) => `${Math.floor(n)}+`)}
              </animated.span>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
            <Typography variant="h6">Projects</Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              <animated.span>
                {projectsProps.number.to((n) => `${Math.floor(n)}+`)}
              </animated.span>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
            <Typography variant="h6">Clients</Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              <animated.span>
                {clientsProps.number.to((n) => `${Math.floor(n)}+`)}
              </animated.span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StatsCard;
