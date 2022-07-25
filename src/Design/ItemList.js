import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const todo = [
  {
    name: "todo 01",
    dis: "todo dis 01",
  },
  {
    name: "todo 02",
    dis: "todo dis 02",
  },
  {
    name: "todo 03",
    dis: "todo dis 03",
  },
  {
    name: "todo 04",
    dis: "todo dis 04",
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ItemList() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      style={{
        width: "80%",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {todo.map((val, key) => {
        let t = "panel" + key + 1;
        return (
          <Accordion expanded={expanded === t} onChange={handleChange(t)}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{val.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{val.dis}</Typography>
            </AccordionDetails>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </Accordion>
        );
      })}
    </div>
  );
}
