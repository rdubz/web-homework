import React, { useCallback } from 'react';
import { arrayOf, string, bool, number, shape } from 'prop-types'
import { TxTable } from './TxTable';
import Button from '@mui/material/Button';
import { css } from '@emotion/core'
import { Link } from 'react-router-dom';

const transactionStyles = css`
 .transactionsContainer {
     text-align: center;
 }

 .createTransactionLink {
     margin-top: 20px;
 }
`

export function Transactions({data}) {
    return(
        <div css={transactionStyles}>

            <div className='transactionsContainer'>
                <TxTable data={data} />
                <Link to='/create-transaction'>
                    <p className='createTransactionLink'>+ Create New Transaction</p>
                </Link>
            
            </div>
        </div>
    )
}

Transactions.propTypes = {
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