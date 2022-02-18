import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import { useMutation } from '@apollo/client'
import UpdateTransaction from '../../gql/updateTransaction.gql'
import { formBoxStyles } from '../../styles/global'

export function EditTransaction () {
  const [userId, setUserId] = useState('')
  const [merchantId, setMerchantId] = useState('')
  const [description, setDescription] = useState('')
  const [debit, setDebit] = useState(true)
  const [credit, setCredit] = useState(false)
  const [amount, setAmount] = useState(0)

  function handleDebitClicked () {
    setDebit(!debit)

    // only debit or credit can be selected at once
    if (!debit && credit) {
      setCredit(!credit)
    }
  }

  function handleCreditClicked () {
    setCredit(!credit)

    // only debit or credit can be selected at once
    if (!credit && debit) {
      setDebit(!debit)
    }
  }

  function checkForCompletedForm () {
    return userId.length > 0 && merchantId.length > 0 && description.length > 0 && amount !== 0
  }

  function clearForm () {
    setUserId('')
    setMerchantId('')
    setDebit(true)
    setCredit(false)
    setDescription('')
    setAmount(0)
  }

  const [updateTransaction] = useMutation(UpdateTransaction, {
    variables: {
      id: '9hef9wh',
      user_id: userId,
      merchant_id: merchantId,
      description: description,
      debit: debit,
      credit: credit,
      amount: parseFloat(amount)
    }
  })

  return (
    <div className='editTransactionForm' css={formBoxStyles}>
      <Box className='formBox' component='form' onSubmit={(e) => {
        e.preventDefault()
        updateTransaction()
        clearForm()
      }}>
        <FormGroup className='formGroup'>
          <TextField id='userIdTextBox' label='User ID' onChange={(e) => setUserId(e.target.value)} required value={userId} />
          <TextField id='merchantIdTextBox' label='Merchant ID' onChange={(e) => setMerchantId(e.target.value)} required value={merchantId} />
          <TextField id='descriptionTextBox' label='Description' maxrows={4} multiline onChange={(e) => setDescription(e.target.value)} required value={description} />
          <FormControlLabel control={<Switch checked={debit} onClick={handleDebitClicked} />} label='Debit' />
          <FormControlLabel control={<Switch checked={credit} onClick={handleCreditClicked} />} label='Credit' />
          <TextField id='amountTextBox' label='amount' onChange={(e) => setAmount(e.target.value)} required value={amount} />
        </FormGroup>
        <Button disabled={!checkForCompletedForm()} type='submit' variant='contained'>Update Transaction</Button>
      </Box>
    </div>
  )
}
