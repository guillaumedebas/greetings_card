import NotificationBell from '../NotificationBell/NotificationBell';
import Avatar from '@mui/material/Avatar';
import photoguillaume from '../../assets/photo-guillaume-debas.webp'
import CommonButton from '../Common/CommonButtom/CommonButtom';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/system/Box';
import { headerStyles } from './styles';

const Header = ({ title }) => {
   

    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography
                    sx={headerStyles.link}
                >
                    Go to docs
                </Typography>
                <NotificationBell
                    iconColor='white'
                />
                <Avatar src={photoguillaume} />
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    variant="h1"
                    color="white"
                >
                    {title}
                </Typography>
                <Box>
                    <CommonButton
                        sx={headerStyles.webButton}
                        variant="outlined"
                    >
                        Web setup
                    </CommonButton>
                    <Tooltip
                        title="help"
                    >
                        <IconButton
                            color="white"
                            sx={headerStyles.helpIcon}
                        >
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header