import React from 'react'
import Button from '@mui/material/Button';
import editbackground from './assets/editbg.png';
import { Grid } from '@mui/material'
import Navbar from './Navbar';

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

export default function Home() {
  return (
    <div style={styles.background}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Welcome to the Basic Banking System Project!</h1>
    </div >
  )
}
