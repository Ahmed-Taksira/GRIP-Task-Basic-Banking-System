import { Grid, FormControl, InputLabel, OutlinedInput, MenuItem, Select, Alert, Button } from '@mui/material'
import React from 'react'
import axios from 'axios'

export default function CustomerDetails(props) {
  const [receiver, setReceiver] = React.useState('')
  const [amount, setAmount] = React.useState('')
  const [invalid, setInvalid] = React.useState(false)
  const [insufficient, setInsufficient] = React.useState(false)

  const ChangeReceiver = (event) => {
    setReceiver(event.target.value);
  }

  const ChangeAmount = (e) => {
    if (!Number(e.target.value) && e.target.value !== '')
      setInvalid(true)
    else
      setInvalid(false)
    if (Number(e.target.value) > Number(props.customer.balance))
      setInsufficient(true)
    else
      setInsufficient(false)
    setAmount(e.target.value)
  }

  const onTransfer = () => {
    const data = {
      sender: {
        _id: props.customer._id,
        name: props.customer.name,
        email: props.customer.email,
        balance: Number(props.customer.balance) - Number(amount)
      },
      receiver: {
        _id: receiver._id,
        name: receiver.name,
        email: receiver.email,
        balance: Number(receiver.balance) + Number(amount)
      }
    }

    const data2={
      sender: props.customer.name,
      receiver: receiver.name,
      amount: amount
    }

    axios.patch(`https://grip-banking-task.herokuapp.com/api/customers/transfer`, data)
      .then(res => {
        props.setL(L => !L)
        props.setSuccess(true)
        setAmount('')
      })
      .then(()=>{
        axios.post(`https://grip-banking-task.herokuapp.com/api/transactions`, data2)
      })
      .catch(err => {
        console.log('Error from Tranferring');
      })
  }

  return (
    <div>
      <Grid container spacing={7}>
        <Grid item>
          <p>Name: {props.customer.name}</p>
          <p>Email: {props.customer.email}</p>
          <p>Balance: {props.customer.balance}</p>
        </Grid>

        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel>Transfer To</InputLabel>
            <Select
              id="select"
              value={receiver}
              defaultValue=''
              onChange={ChangeReceiver}
              input={<OutlinedInput label="Transfer to" />}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {props.all.filter(c => c.name !== props.customer.name).map(C => (
                <MenuItem key={C.name} value={C}>{C.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl sx={{ m: 1, width: 152 }}>
            <InputLabel>Amount</InputLabel>
            <OutlinedInput
              name='amount'
              id="amountfield"
              value={amount}
              type="text"
              onChange={ChangeAmount}
            />
          </FormControl>
          <br />

          {invalid && (<Alert sx={{ width: 1 / 1.3 }} variant='filled' severity="error">
            Invalid Number
          </Alert>)}

          {insufficient && (<Alert sx={{ width: 1 / 1.2 }} variant='filled' severity="error">
            Insufficient Amount
          </Alert>)}
          <br />
          <Button onClick={onTransfer} variant="contained" disabled={invalid || insufficient || receiver === ''}>Transfer Money</Button>
        </Grid>
      </Grid>
    </div>
  )
}
