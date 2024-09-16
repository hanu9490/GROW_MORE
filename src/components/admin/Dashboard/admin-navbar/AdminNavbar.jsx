import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import JobListingScreen from "../jobposting/JobListingScreen";
import AddJob from "../jobposting/AddJob";
import ContactedUsers from "../contactedUsers/ContactedUsers";

const pages = ["Posted Jobs", "Create Job", "Contacted Users"];

const AdminNavbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [selectedPage, setSelectedPage] = useState("Posted Jobs"); // Default selected page

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (page) => {
    setSelectedPage(page);
    setAnchorElNav(null); // Close the menu after selection
  };

  const renderContent = () => {
    switch (selectedPage) {
      case "Posted Jobs":
        return <JobListingScreen />;
      case "Create Job":
        return <AddJob />;
      case "Contacted Users":
        return <ContactedUsers />;
      default:
        return <JobListingScreen />;
    }
  };

  return (
    <div>
      <AppBar position="static" sx={{ marginTop: "80px" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => handleMenuItemClick(page)}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Menu Items */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleMenuItemClick(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Content Area */}
      <Container sx={{ mt: 4 }}>
        <Paper sx={{ padding: 2 }}>{renderContent()}</Paper>
      </Container>
    </div>
  );
};

export default AdminNavbar;
