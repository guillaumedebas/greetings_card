import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButtom/CommonButtom';

const Authentication = () => {
    const buttonStyles = {
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: 'red',
        '&:hover' : {
            backgroundColor: 'blue'
        }
    }
    return (
        <Grid item xs={8}>
            This is authentication page.
            <CommonButton
            size="large"
            variant="contained"
            sx={buttonStyles}
            >text</CommonButton>
            <CommonButton
            variant="outlined"
            >Add User</CommonButton>
        </Grid>
    )
}

export default Authentication