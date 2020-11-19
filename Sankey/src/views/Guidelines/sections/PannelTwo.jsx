/* eslint-disable */

import React from 'react';
import Grid from '@material-ui/core/Grid';

const pannelContent = [
  [
    'INDIVIDUALS',
    <React.Fragment>
      <p>
        <b>ALL VULNERABLE INDIVIDUALS</b> should continue to shelter in place. Members
        of households with vulnerable residents should be aware that by returning
        to work or other environments where distancing is not practical, they
        could carry the virus back home. Precautions should be taken to isolate from vulnerable residents.
      </p>
      <p>
        All individuals, <b>WHEN IN PUBLIC</b> (e.g., parks, outdoor recreation areas, shopping areas),
        should maximize physical distance from others. Social settings of more than 50 people,
        where appropriate distancing may not be practical,
         should be avoided unless precautionary measures are observed.
      </p>
      <p>
        <b>NON-ESSENTIAL TRAVEL can resume.</b>
      </p>
    </React.Fragment>
  ],
  [
    'EMPLOYERS',
    <React.Fragment>
    <p>
    Continue to <b>ENCOURAGE TELEWORK</b>, whenever possible and feasible with business operations.
    </p>
    <p>
    Close <b>COMMON AREAS</b> where personnel are likely to congregate and interact, or enforce moderate social distancing protocols.
    </p>
    <p>
    Strongly consider <b>SPECIAL ACCOMMODATIONS</b> for personnel who are members of a <b><u>VULNERABLE POPULATION</u></b>.
    </p>
    </React.Fragment>,
  ],
  [
    'SPECIFIC TYPES OF EMPLOYERS',
    <React.Fragment>
    <p>
    <b>SCHOOLS AND ORGANIZED YOUTH ACTIVITIES</b> (e.g., daycare, camp) can reopen.
    </p>
    <p>
      <b>VISITS TO SENIOR LIVING FACILITIES AND HOSPITALS</b> should be prohibited. Those who do interact with residents and patients must adhere to strict protocols regarding hygiene.
    </p>
    <p>
      <b>LARGE VENUES</b> (e.g., sit-down dining, movie theaters, sporting venues, places of worship) can operate under moderate physical distancing protocols.
    </p>
    <p>
      <b>ELECTIVE SURGERIES</b> can resume, as clinically appropriate, on an outpatient and in-patient basis at facilities that adhere to CMS guidelines.
    </p>
    <p>
      <b>GYMS</b> can open if they adhere to strict physical distancing and sanitation protocols.
    </p>
    <p>
      <b>BARS</b> may operate with diminished standing-room occupancy, where applicable and appropriate.
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
