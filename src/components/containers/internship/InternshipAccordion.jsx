import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const InternshipAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <div className="internship-accordion-container">
      <div className="h1">FAQ</div>
      <div className="h2">Any Questions? Answered</div>
      <div className="accordion-container">
        <div className="accordion-column">
          <Accordion
            expanded={expanded === 0}
            onChange={handleChange(0)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel0bh-content"
              id="panel0bh-header"
            >
              <Typography>What is the duration of Internship?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                All our internships are for a period of 1 month only.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 1}
            onChange={handleChange(1)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>What is the criteria for selection?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Determination to learn and grow is all what is needed.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 2}
            onChange={handleChange(2)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>Do I need any specific qualifications to apply?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No specific qualifications are required, just a willingness to learn.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="accordion-column">
          <Accordion
            expanded={expanded === 3}
            onChange={handleChange(3)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography>Is the internship paid?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The internship is unpaid, but you will gain valuable experience.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 4}
            onChange={handleChange(4)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>Can I work remotely?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, all our internships are remote.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 5}
            onChange={handleChange(5)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography>Will I receive a certificate at the end of the internship?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, you will receive a certificate upon successful completion of the internship.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default InternshipAccordion;
