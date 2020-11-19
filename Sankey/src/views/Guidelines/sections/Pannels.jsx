/* eslint-disable */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import PannelZero from './PannelZero.jsx';
import PannelOne from './PannelOne.jsx';
import PannelTwo from './PannelTwo.jsx';
import PannelThree from './PannelThree.jsx';

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
      '& > p': {

      }
    },
  },
  phaseZero: {
    textAlign: 'center',
    paddingBottom: '30px',
    color: '#0a2644',
    '& h5': {
      marginTop: '1em',
      marginBottom: '5px',
    },
    '& h6': {
      marginTop: '5px',
      marginBottom: '5px',
    },
    '& hr': {
      height: '1px',
      backgroundColor: '#ccc',
      border: 'none',
      width: '80%',
    }
  },
  phaseOne: {
    '& p': {
      fontSize: '14px',
    },
    '& h4': {
      color: '#0a2644',
      textAlign: 'center',
      fontSize: '18px',
      //paddingTop: '12px'
    },
    '& hr': {
      height: '1px',
      backgroundColor: '#ccc',
      border: 'none',
      width: '80%',
      marginTop: '8px'
    }

  },
}));

const pannels = (classes) => [
  {
    title: 'Proposed State or Regional Gating Criteria',
    subtile: 'Satisfy Before Proceeding to Phased Comeback',
    content: <PannelZero classes={classes}/>,
    text: `State and local officials may need to tailor the application of these criteria to local circumstances (e.g., metropolitan areas that have suffered severe COVID outbreaks, rural and suburban areas where outbreaks have not occurred or have been mild). Additionally, where appropriate, Governors should work on a regional basis to satisfy these criteria and to progress through the phases outlined below.`,
  },
  {
    title: 'Phase One ',
    subtile: 'For States and Regions that satisfy the gating criteria',
    content: <PannelOne classes={classes} />
  },
  {
    title: 'Phase Two',
    subtile: 'For States and Regions with no evidence of a rebound and that satisfy the gating criteria a second time',
    content: <PannelTwo classes={classes} />,
  },
  {
    title: 'Phase Three',
    subtile: 'For States and Regions with no evidence of a rebound and that satisfy the gating criteria a third time',
    content: <PannelThree classes={classes} />,
  }
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
