import React from 'react';
import { arrayOf, string, bool, number, shape } from 'prop-types'
import { TxTable } from './TxTable'
import { Link } from 'react-router-dom'
import { transactionStyles } from '../../styles/global'

export function Transactions({data}) {
    return(
        <div className='transactionsContainer' css={transactionStyles}>
            <TxTable data={data} />
            <Link to='/create-transaction'>
                <p className='createTransactionLink'>+ Create New Transaction</p>
            </Link>
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