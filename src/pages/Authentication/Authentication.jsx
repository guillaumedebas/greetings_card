import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButtom/CommonButtom';

const Authentication = () => {
    const buttonStyles = {
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        borderRadius: 2.5,
        '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
                backgroundColor: '#006db3'
            },
        },
        '&.MuiButton-outlined': {
            color: "#fff",
            borderColor: '#fff',
            '&:hover': {
                backgroundColor: 'transparent'
            },
        },
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
                variant="contained"
                color="primary"
            >Add User</CommonButton>
        </Grid>
    )
}

export default Authentication