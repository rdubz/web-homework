import React from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
import Converter from '../../utils/converter'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import DeleteTransaction from '../../gql/deleteTransaction.gql'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function TxTable ({ data }) {

  function romanNumerals()
  {
    let enabled = localStorage.getItem('displayRomanNumerals')

        if(enabled === null || enabled === 'false') {
            return false;
        }
        
        return true;
  }

  function handleDeleteTransaction(id)
  {
    deleteTransaction({ variables: { id:id } })
  }

  const [deleteTransaction] = useMutation(DeleteTransaction);

  return (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">User ID</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Merchant ID</TableCell>
                  <TableCell align="right">Debit</TableCell>
                  <TableCell align="right">Credit</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((tx) => (
                  <TableRow
                    key={tx.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell data-testid={makeDataTestId(tx.id, 'id')} component="th" scope="row"> {tx.id}</TableCell>
                    <TableCell data-testid={makeDataTestId(tx.id, 'userId')} align="right">{tx.user_id}</TableCell>
                    <TableCell data-testid={makeDataTestId(tx.id, 'description')} align="right">{tx.description}</TableCell>
                    <TableCell data-testid={makeDataTestId(tx.id, 'merchant')} align="right">{tx.merchant_id}</TableCell>
                    <TableCell data-testid={makeDataTestId(tx.id, 'debit')} align="right">{tx.debit? 'Yes' : 'No'}</TableCell>
                    <TableCell data-testid={makeDataTestId(tx.id, 'credit')} align="right">{tx.credit? 'Yes' : 'No'}</TableCell>
                    <TableCell data-testid={makeDataTestId(tx.id, 'amount')} align="right">{romanNumerals()? Converter.ToRomanNumerals(tx.amount) : tx.amount}</TableCell>
                    <TableCell align="right"><Link to={'/edit-transaction/' + tx.id}><EditIcon /></Link></TableCell>
                    <TableCell align="right"><Link><DeleteIcon onClick={handleDeleteTransaction(tx.id)}/> </Link></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
  )
}

TxTable.propTypes = {
  data: arrayOf(shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  }))
}
