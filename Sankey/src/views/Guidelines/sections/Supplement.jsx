/* eslint-disable */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import Graph from 'assets/Blank Diagram.png';
import Logo from 'assets/logo.svg';

// import PannelZero from './PannelZero.jsx';
// import PannelOne from './PannelOne.jsx';
// import PannelTwo from './PannelTwo.jsx';
// import PannelThree from './PannelThree.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: '600',
    color: '#0a2644',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  summary: {
    '& .MuiExpansionPanelSummary-content': {
      // border: '1px solid green',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '25px',
    },
    '& .MuiExpansionPanelDetails-root': {
      flexDirection: 'column',
      '& > p': {}
    },
  },
  graph: {
    // maxWidth: '100%',
    height: '200px',
    // width: 'auto'
  },

}));

function PannelZero(props) {
  const { classes } = props;

  return (
    <img className={classes.graph} src={Graph} alt="Logic Diagram" />
  )
}

function PannelOne(props) {
  const { classes } = props;

  return null
}

const pannels = (classes) => [
  {
    title: 'Logic for Judging Gating Criteria',
    content: <PannelZero classes={classes}/>,
    text: `Example of how downward trend is calculated: For new cases 14 day average we used an i of 14, x of 0.8, and y of 1.03. Phase one is triggered when gating criteria are met for the last 14 days. Phase two is triggered after 28 days and Phase Three after 42 days of gating criteria met.`,
  },
  // {
  //   title: 'About this Dashboard',
  //   content: <PannelOne classes={classes}/>,
  // },
]

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {pannels(classes).map((item, ind) => {
        const pannelId = `panel${ind + 1}`
        return (
          <ExpansionPanel
            key={ind}
            className={classes.summary}
            expanded={expanded === pannelId}
            onChange={handleChange(pannelId)}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={pannelId + "bh-content"}
              id={pannelId + "bh-header"}
            >
              <Typography className={classes.heading}>{item.title}</Typography>
              <Typography className={classes.secondaryHeading}>{item.subtile}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {item.content}
              <Typography>
                {item.text}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </div>
  );
}
