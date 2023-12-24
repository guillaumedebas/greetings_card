import NotificationBell from '../NotificationBell/NotificationBell';
import Avatar from '@mui/material/Avatar';
import photoguillaume from '../../assets/photo-guillaume-debas.webp'
import CommonButton from '../Common/CommonButtom/CommonButtom';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';


const Header = ({title}) => {
    return (
        <div >
            <CommonButton
                variant="default"
            >
                Go to docs
            </CommonButton>
            <NotificationBell
                iconColor='primary'
            />
            <Avatar src={photoguillaume} />
            <div>
                <Typography>{title}</Typography>
                <CommonButton variant="outlined">Web setup</CommonButton>
               <Tooltip title="help"><IconButton><HelpIcon/></IconButton></Tooltip>
            </div>
        </div>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header