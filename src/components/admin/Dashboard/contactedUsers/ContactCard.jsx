import React from "react";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";

const ContactCard = ({ contactedUsers }) => {
  // Sort the contacts by createdAt in descending order
  const sortedContacts = [...contactedUsers].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contacted Users
      </Typography>
      <Grid container spacing={3}>
        {sortedContacts.map((contact) => (
          <Grid item xs={12} sm={6} md={4} key={contact._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{contact.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {contact.email}
                </Typography>
                <Typography variant="body1" paragraph>
                  {contact.query}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Created At: {new Date(contact.createdAt).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ContactCard;
