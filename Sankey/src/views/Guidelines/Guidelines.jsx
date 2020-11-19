/* eslint-disable */

import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Pannels from './sections/Pannels.jsx';
import Supplement from './sections/Supplement.jsx';
// import Table from './sections/Table.jsx';

import Logo from "assets/opening-america-logo.png";
import GTLogo from 'assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '550px',
    paddingRight: '12px',
    paddingTop: '1px',
  },
  headerWrap: {
    backgroundColor: '#fff',
    borderRadius: '3px',
    padding: '15px',
    marginBottom: '10px',
  },
  logoWrap: {
    // textAlign: 'center',
    paddingLeft: '7%',
  },
  logo: {
    maxHeight: '150px',
    maxWidth: '93%',
  },
  mainContent: {
    textAlign: 'left',
    '& p,li': {
      fontSize: '14px',
    }
  },
  power: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '12px',
    backgroundColor: '#fff',
    borderRadius: '3px',
    paddingBottom: '16px',
  },
  gtlogo: {
    maxWidth: '60%',
  }
}));

function District(props) {

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container className={classes.headerWrap}>
          <Grid item xs={12}>
            <div className={classes.logoWrap}>
              <img className={classes.logo} src={Logo} alt="Open America Logo"/>
            </div>
            <div className={classes.mainContent}>
            <p>President Trump has unveiled Guidelines for Opening Up America Again, a three-phased approach based on the advice of public health experts. These steps will help state and local officials when reopening their economies, getting people back to work, and continuing to protect American lives.</p>

              <h4 style={{ color: '#0a2644' }}>
                Proposed Phased Approach
              </h4>
              <ul>
                {[
                  "Based On Up-To-Date Data And Readiness",
                  "Mitigates Risk Of Resurgence",
                  "Protects The Most Vulnerable",
                  "Implementable On Statewide Or County-By-County Basis At Governors' Discretion",
                ].map((item, ind) => {
                  return (
                    <li key={ind}>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: '10px', }}>
        <Pannels />
      </Grid>
      <Grid item xs={12}>
        <Supplement />
      </Grid>
      <Grid item className={classes.power} xs={12}>
        <p>Powered by</p>
        <img className={classes.gtlogo} src={GTLogo} alt="Grant Thornton" />
      </Grid>
    </Grid>
  )
}

export default District;
