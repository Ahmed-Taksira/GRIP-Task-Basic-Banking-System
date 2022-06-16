import editbackground from './assets/editbg.png';
import React from 'react'
import axios from 'axios';
import { Grid } from '@mui/material'
import TransactionCard from './TransactionCard';

const styles = {
  background: {
    position: 'absolute',
    height: '98.5%',
    width: '98.5%',
    justifyContent: 'center',
    backgroundImage: `url(${editbackground})`,
    backgroundRepeat: 'no-repeat',
    textAlign: 'center'
  }
};

export default function Transactions() {
  const [transactions, setTransactions]=React.useState([])

  React.useEffect(()=>{
    axios.get(`https://grip-banking-task.herokuapp.com/api/transactions`)
    .then(res=>setTransactions(res.data))
    .catch(err =>{
      console.log('Error from Getting');
    })
  }, [])

  return (
    <div style={styles.background}>
      <h1 style={{ color: 'grey' }}>All Transactions</h1>

      <Grid container spacing={5}>
        {transactions.map(t => (
          <Grid item key={t._id}>
            <TransactionCard T={t}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
