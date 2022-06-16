import React from 'react'
import TransactionDetails from './TransactionDetails'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function TransactionCard(props) {
    const [openDetails, setOpenDetails] = React.useState(false);

    const handleClickCloseDetails = () => {
        setOpenDetails(false);
    };

    const handleClickOpenDetails = async () => {
        setOpenDetails(true)
    };

    return (
        <div>
            <Card sx={{ maxWidth: 300 }}>
                <CardContent style={{ textAlign: 'center' }}>
                    ---------------------------------------
                    <Typography variant="h5" component="div">
                        From {props.T.sender} to {props.T.receiver}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       --------------------------------------------
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button variant='contained' onClick={handleClickOpenDetails} size="small">Transaction Details</Button>
                </CardActions>
            </Card>

            <Dialog
                open={openDetails}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClickCloseDetails}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'Transaction Detials'}</DialogTitle>
                <DialogContent>
                    <TransactionDetails T={props.T}/>
                </DialogContent>
                <DialogActions>
                    <Button size='large' variant="contained" onClick={handleClickCloseDetails}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
