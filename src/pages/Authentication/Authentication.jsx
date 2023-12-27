import BasicCard from '../../components/BasicCard/BasicCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import CommonButton from '../../components/Common/CommonButtom/CommonButtom';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { cardHeaderStyles } from './styles';
import GripWrapper from '../../components/GridWrapper/GripWrapper';

const Authentication = () => {
    const getHeader = () => {
        const handleChange = (value) => {
            console.log(value)
        }

        const addUser = () => {
            console.log('click')
        }


        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar
                    placeholder='Search by email, phone number, or user UID'
                    onChange={(Event) => handleChange(Event.target.value)}
                    searchBarWidth='520px'
                />
                <Box>
                <CommonButton
                    variant="contained"
                    onClick={addUser}
                    size="large"
                    sx={cardHeaderStyles.addUserButton}
                >
                    Add user
                </CommonButton>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
                </Box>
            </Box>
        )
    }

    const getContent = () => (
        <Typography
            align="center"
            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem' }}
        >
            No users for this project yet
        </Typography>
    );


    return (
        <GripWrapper>

            <BasicCard
                header={getHeader()}
                content={getContent()}
            />

        </GripWrapper>
    )
}

export default Authentication