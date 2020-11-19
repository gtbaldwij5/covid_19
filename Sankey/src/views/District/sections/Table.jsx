/* eslint-disable */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  header: {
    backgroundColor: '#003a70',
    borderRadius: '4px',
    '& th:first-child': {
      borderRadius: '5px 0 0 5px',
    },
    '& th:last-child': {
      borderRadius:'0 5px 5px 0',
    },
    '& th': {
      color: 'white',
      borderBottom: 'none',
    },
  },
  gutter: {
    minWidth: '100px',
  }
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit, ipsum) {
  return { desc, qty, unit, ipsum };
}

function subtotal(items) {
  return items.map((item) => priceRow(item.qty, item.unit)).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15, 'Keffiyeh enamel pin'),
  createRow('Paper (Case)', 10, 45.99, '8-bit kickstarter jianbing'),
  createRow('Waste Basket', 2, 17.99, 'Vaporware craft beer'),
];



export default function SpanningTable(props) {
  const classes = useStyles();

  const [data, setData] = useState(rows);

  const onChange = (e, index, dir) => {
    const newData = [ ...data ];
    newData[index] = {
      ...data[index],
      qty: dir ? data[index].qty + 1 : data[index].qty - 1
    }
    setData(newData);
  }

  const invoiceSubtotal = subtotal(data);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  // console.log(data);

  return (
    <div {...props} >
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow className={classes.header} >
            <TableCell>Desc</TableCell>
            <TableCell />
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
            <TableCell align="left" className={classes.gutter}>Other Bits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, ind) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  aria-label="add to"
                  onClick={(e) => onChange(e, ind, true)}
                >
                  <AddCircle fontSize="small" />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label="add to"

                  onClick={(e) => onChange(e, ind, false)}
                >
                  <RemoveCircle fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(priceRow(row.qty, row.unit))}</TableCell>
              <TableCell align="left">{row.ipsum}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            <TableCell rowSpan={data.length + 3} className={classes.gutter} />
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
