import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { css } from '@emotion/core'
import { useMutation, gql } from '@apollo/client';
import CreateTransactionMutation from '../../gql/createTransaction.gql'

const styles = css`
 .formBox {
   margin: 0 auto;
   max-width: 500px;
 }
`

export function CreateTransaction()
{
    const [userId, setUserId] = useState("")
    const [merchantId, setMerchantId] = useState("")
    const [description, setDescription] = useState("")
    const [debit, setDebit] = useState(true)
    const [credit, setCredit] = useState(false)
    const [amount, setAmount] = useState(0)

    function handleDebitClicked() {
        setDebit(!debit)

        //only debit or credit can be selected at once
        if(!debit && credit)
        {
            setCredit(!credit)
        }
    }

    function handleCreditClicked() {
        setCredit(!credit)

        //only debit or credit can be selected at once
        if(!credit && debit)
        {
            setDebit(!debit)
        }
    }

    function checkForCompletedForm() {
        return userId.length > 0 && merchantId.length > 0 && description.length > 0 && amount !== 0
    }

    function clearForm() {
        setUserId("")
        setMerchantId("")
        setDebit(true)
        setCredit(false)
        setDescription("")
        setAmount(0)
    }

    const [createTransaction] = useMutation(CreateTransactionMutation, {
        variables: {
            user_id: userId,
            merchant_id: merchantId, 
            description: description,
            debit: debit,
            credit: credit,
            amount: parseFloat(amount)
        }
      });

    return(
        <div className='createTransactionForm' css={styles}>
            <Box component="form" className='formBox' onSubmit={(e) => {
        e.preventDefault();
        createTransaction();
        clearForm();}}>
                <FormGroup className='formGroup'>
                    <TextField required id="userIdTextBox" label="User ID" onChange={(e) => setUserId(e.target.value)}/>
                    <TextField required id="merchantIdTextBox" label="Merchant ID" onChange={(e) => setMerchantId(e.target.value)}/>
                    <TextField multiline maxrows={4} required id="descriptionTextBox" label="Description" onChange={(e) => setDescription(e.target.value)}/>
                    <FormControlLabel control={<Switch onClick={handleDebitClicked} checked={debit}/>} label="Debit" />
                    <FormControlLabel control={<Switch onClick={handleCreditClicked} checked={credit}/>} label="Credit"/>
                    <TextField required id="amountTextBox" label="amount" onChange={(e) => setAmount(e.target.value)}/>
                </FormGroup>
                <Button variant="contained" disabled={!checkForCompletedForm()} type='submit'>Create Transaction</Button>
            </Box>
        </div>
    )
}