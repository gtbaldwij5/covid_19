/* eslint-disable */

import React from "react";


import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function CustomSelect(props) {

  const {
    classes,
    id,
    onChange,
    items,
    label,
    value
  } = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={`${id}-select-autowidth-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-select-autowidth-label`}
        id={id}
        value={value}
        onChange={(e) => onChange(e, id)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {items.map((item, ind) => {
          return (
            <MenuItem key={ind} value={item}>
              {item}
            </MenuItem>
          )
        })}
      </Select>
      {/*<FormHelperText>Auto width</FormHelperText>*/}
    </FormControl>
  )
}

export default CustomSelect
