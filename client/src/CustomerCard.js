import * as React from 'react'
import CustomerDetails from './CustomerDetails';
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blue } from '@mui/material/colors';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomerCard(props) {
    const [openDetails, setOpenDetails] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleClickCloseDetails = () => {
        setSuccess(false)
        setOpenDetails(false);
    };

    const handleClickOpenDetails = async () => {
        setOpenDetails(true)
    };

    return (
        <div>
            <Card sx={{ maxWidth: 250 }}>
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        ---------------------------------------------
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.customer.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        ---------------------------------------------
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' onClick={handleClickOpenDetails} size="small">Customer Details</Button>
                </CardActions>
            </Card>

            <Dialog
                open={openDetails}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClickCloseDetails}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{!success ? "Customer Details" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "Money Transfer" : ''}</DialogTitle>
                <DialogContent>
                    {!success ? (<CustomerDetails setSuccess={setSuccess} customer={props.customer} all={props.all} setL={props.setL} />) : (
                        <div style={{textAlign: 'center'}}>
                            <CheckCircleIcon sx={{ color: blue[500], fontSize: 180 }} />
                            <h2>Success</h2>
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button size='large' variant="contained" onClick={handleClickCloseDetails}>{success ? 'Done' : 'Close'}</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
