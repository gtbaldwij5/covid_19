/* eslint-disable */

import React from 'react';
import Grid from '@material-ui/core/Grid';

const pannelOneContent = [
  [
    'SYMPTOMS',
    'Downward trajectory of influenza-like illnesses (ILI) reported within a 14-day period',
    'AND',
    'Downward trajectory of covid-like syndromic cases reported within a 14-day period'
  ],
  [
    'CASES',
    'Downward trajectory of documented cases within a 14-day period',
    'OR',
    'Downward trajectory of positive tests as a percent of total tests within a 14-day period (flat or increasing volume of tests)',
  ],
  [
    'HOSPITALS',
    'Treat all patients without crisis care',
    'AND',
    'Robust testing program in place for at-risk healthcare workers, including emerging antibody testing',
  ],
]

export default function PannelZero(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.phaseZero}>
      {pannelOneContent.map((item, ind) => {
        return (
          <Grid key={ind} item xs={12}>
            <h5>{item[0]}</h5>
            <p>{item[1]}</p>
            <h6>{item[2]}</h6>
            <p>{item[3]}</p>
            {ind != pannelOneContent.length - 1 ? <hr /> : null}
          </Grid>
        )
      })}
    </Grid>
  )
}
