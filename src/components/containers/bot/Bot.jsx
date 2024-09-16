import React, { useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import "./Bot.css";
import { ThemeProvider } from "styled-components";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Tooltip } from "@mui/material";
import { ContactService } from "../../../services/ContactService";
import { setCreatedContact } from "../../../redux-store/slices/ContactSlice";
const Bot = () => {
  // State to toggle chatbot visibility
  const [isBotVisible, setIsBotVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // State to store user information
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  // console.log(userInfo, "userInfo from bot");

  // Toggle chatbot visibility
  const toggleBot = () => {
    setIsBotVisible(!isBotVisible);
  };

  function createContact(payload) {
    ContactService.CreateContactUs(payload)
      .then((response) => {
        setCreatedContact(response.data);
      })
      .catch((error) => {
        console.error("Error creating contact:", error);
      });
  }

  // Customizing the chatbot theme
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#00bfff",
    headerFontColor: "#fff",
    headerFontSize: "20px",
    botBubbleColor: "#00bfff",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  // Define chatbot steps
  const steps = [
    {
      id: "1",
      message: "Hi! I am your assistant. What's your name?",
      trigger: "name",
    },
    {
      id: "name",
      user: true,
      validator: (value) => {
        if (!value) {
          return "Please provide your name.";
        }
        return true;
      },
      trigger: "2",
    },
    {
      id: "2",
      message: "Great! What's your email?",
      trigger: "email",
    },
    {
      id: "email",
      user: true,
      validator: (value) => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email.";
        }
        return true;
      },
      trigger: "3",
    },
    {
      id: "3",
      message: "Got it! What's your phone number?",
      trigger: "phone",
    },
    {
      id: "phone",
      user: true,
      validator: (value) => {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          return "Please enter a valid 10-digit phone number.";
        }
        return true;
      },
      trigger: "4",
    },
    {
      id: "4",
      message: "What query do you have?",
      trigger: "query",
    },
    {
      id: "query",
      user: true,
      trigger: "5",
    },
    {
      id: "5",
      message: "Thank you! We'll reach out shortly.",
      trigger: "end",
    },
    {
      id: "end",
      component: <div />, // Placeholder for the component to avoid re-rendering issues
      asMessage: true,
      end: true,
    },
  ];

  // Handle the end of the conversation
  const handleEnd = ({ steps }) => {
    const name = steps.name.value;
    const email = steps.email.value;
    const phone = steps.phone.value;
    const query = steps.query.value;
    let payload = {
      name: name,
      email: `${email} , ${phone}`,
      query: query,
    };
    createContact(payload);
  };

  // Custom Header with Close Button
  const CustomHeader = () => (
    <div style={headerStyle}>
      <div>Chat Assistant</div>
      <button onClick={toggleBot} style={closeButtonStyle}>
        &times;
      </button>
    </div>
  );

  // Styling for the custom header
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#212ea0",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
  };

  // Styling for the close button in the header
  const closeButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "red",
    fontSize: "24px",
    cursor: "pointer",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false); // Hide tooltip after 5 seconds
    }, 5000);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div>
      <Tooltip
        title="Welcome to GrowMore Chatbot! Click here to start chatting."
        placement="left"
        arrow
        open={showTooltip}
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "white",
              color: "black",
              fontSize: "14px",
              border: "2px solid #0d1741",
              padding: "8px",
              fontFamily: "Poppins",
              maxWidth: {
                xs: "150px", // For small screens
                sm: "180px", // For small to medium screens
                md: "200px", // For medium to large screens
                lg: "250px", // For large screens
              },
              fontWeight: "600",
              "@media (max-width: 390px)": {
                fontSize: "12px", // Adjust font size for smaller screens
                padding: "6px", // Adjust padding for smaller screens
              },
            },
          },
        }}
      >
        {!isBotVisible && (
          <button
            onClick={toggleBot}
            className="chat-button"
            data-tip
            data-for="botTooltip"
          >
            <SmartToyIcon />
          </button>
        )}
      </Tooltip>

      {isBotVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "120px",
            right: "80px",
            zIndex: 1000,
            width: "300px",
            height: "400px",
          }}
        >
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={steps}
              headerComponent={<CustomHeader />}
              handleEnd={handleEnd}
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default Bot;
