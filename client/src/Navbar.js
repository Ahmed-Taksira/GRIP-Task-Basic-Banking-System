import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    Grid,
    Button
} from "@mui/material";

function Navbar() {

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4">
                    Navigation
                </Typography>
                <Grid alignItems="end" justifyContent="end" container spacing={5}>
                    <Grid item key={'create'}>
                        <Button size='large' variant='filled' href='/'>Home</Button>
                    </Grid>
                    <Grid item key={'customers'}>
                        <Button size='large' variant='filled' href='/customers'>View Customers</Button>
                    </Grid>
                    <Grid item key={'transactions'}>
                        <Button size='large' variant='filled' href='/transactions'>View Transactions</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;