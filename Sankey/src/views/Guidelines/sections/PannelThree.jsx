/* eslint-disable */

import React from 'react';
import Grid from '@material-ui/core/Grid';

const pannelContent = [
  [
    'INDIVIDUALS',
    <React.Fragment>
      <p>
        <b>VULNERABLE INDIVIDUALS</b> can resume public interactions,
        but should practice physical distancing, minimizing exposure to social
        settings where distancing may not be practical,
        unless precautionary measures are observed.
      </p>
      <p>
        <b>LOW-RISK POPULATIONS</b> should consider minimizing time spent in crowded environments.
      </p>
    </React.Fragment>
  ],
  [
    'EMPLOYERS',
    <React.Fragment>
    <p>
    Resume <b>UNRESTRICTED STAFFING</b> of worksites.
    </p>
    </React.Fragment>,
  ],
  [
    'SPECIFIC TYPES OF EMPLOYERS',
    <React.Fragment>
    <p>
    <b>VISITS TO SENIOR CARE FACILITIES AND HOSPITALS</b> can resume.
    Those who interact with residents and patients must be diligent regarding hygiene.
    </p>
    <p>
      <b>LARGE VENUES</b> (e.g., sit-down dining, movie theaters, sporting venues,
         places of worship) can operate under limited physical distancing protocols.
    </p>
    <p>
      <b>GYMS</b> can remain open if they adhere to standard sanitation protocols.
    </p>
    <p>
      <b>BARS</b> may operate with increased standing room occupancy, where applicable.
    </p>
    </React.Fragment>
  ],
]

export default function PannelOne(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.phaseOne}>
      {pannelContent.map((item, ind) => {
        return (
          <Grid key={ind} item xs={12}>
            <h4>{item[0]}</h4>
            {item[1]}
            <p style={{height: '5px'}}></p>
            {ind != pannelContent.length - 1 ? <hr /> : null}
          </Grid>
        )
      })}
    </Grid>
  )
}
