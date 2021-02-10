import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function FAQs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root} className="vik">
        <h1><b>Frequently Asked Questions (FAQs)</b></h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><b>Can I submit a problem without login?</b></Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <b>Sorry mate. That isn't possible</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}><b>Why is there only 3 OJs?</b></Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <b>We are working hard to add more OJs for you. Hold Tight </b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}><b>Is my credentials safe here?</b></Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <b>Don't worry mate. Your credentials are safe with us</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}><b>When will some new features will come?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Very Soon. We are working on it.</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}><b>I want to work with you.How to contact?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Send a mail to xoj@gmail.com. Our support team will reach to you soon.</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}><b>Graet work guys. I want to make a donation. How to contact?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Send a mail to xoj@gmail.com. Our support team will reach to you soon.</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}><b>There are some minor bugs in there. Hope you'll look upto it.</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Sure mate. We are working tirelessly.It'd be a big help if you send a mail at xoj@gmail.com mentioning the bugs. Thanks.</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
