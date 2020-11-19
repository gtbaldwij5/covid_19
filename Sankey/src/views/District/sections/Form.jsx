/* eslint-disable */

import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Select from 'components/FormInputs/Select.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  districtWrap: {
    padding: '16px 6px 0 16px',
  },
  agencyWrap: {
    padding: '16px 16px 0 6px',
  },
  formControl: {
    width: '100%',
  }
}));

const districts = [
  "Gentrify offal pok pok",
  "Chillwave unicorn street",
  "Thundercats cardigan"
]

const agencys = [
  "Fingerstache skateboard",
  "Twee dreamcatcher neutra jean",
  "Pitchfork hoodie beard",
  "Meditation actually austin",
  "Waistcoat shoreditch craft beer tacos",
]

function Form(props) {

  const [state, setState] = useState({
    district: "",
    agency: "",
  })

  const classes = useStyles();

  const onChange = (e, id) => {
    e.persist();

    setState({
      ...state,
      [id]: e.target.value,
    })
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6} className={classes.districtWrap}>
        <Select
          classes={classes}
          id={"district"}
          onChange={onChange}
          items={districts}
          label={"District"}
          value={state.district}
        />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.agencyWrap}>
        <Select
          classes={classes}
          id={"agency"}
          onChange={onChange}
          items={agencys}
          label={"Transit Agency"}
          value={state.agency}
        />
      </Grid>
    </Grid>
  )
}

export default Form;
