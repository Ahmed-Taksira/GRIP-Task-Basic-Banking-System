import React from 'react'
import axios from 'axios'
import CustomerCard from './CustomerCard'
import { Grid } from '@mui/material'
import editbackground from './assets/editbg.png';

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

export default function Customers() {
  const [customers, setCustomers]=React.useState([])
  const [listener, setListener] = React.useState(false)

  React.useEffect(()=>{
    axios.get(`http://localhost:8082/api/customers`)
    .then(res=>setCustomers(res.data))
    .catch(err =>{
      console.log('Error from Getting');
    })
  }, [listener])

  return (
    <div style={styles.background}>
      <h1 style={{color: 'grey'}}>All Customers</h1>

      <Grid container spacing={5}>
        {customers.map(c => (
          <Grid item key={c.email}>
            <CustomerCard customer={c} all={customers} setL={setListener}/>
          </Grid>
        ))}
        </Grid>
    </div>
  )
}
