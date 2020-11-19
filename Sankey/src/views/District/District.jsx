/* eslint-disable */

import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Form from './sections/Form.jsx';
import Table from './sections/Table.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '1240px',
  },
  paper: {
    minHeight: "500px",
  }
}));

function District(props) {

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={10}>
        <Paper className={classes.paper} elevation={6}>
          <Form />
          <Table style={{ padding: "36px 12px" }}/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default District;
