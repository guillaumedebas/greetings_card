import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';


const NotificationBell = ({ iconColor, badgeContent }) => {
    const newNotifications = `You have ${badgeContent} messages`
    const noNotifications = "No messages"
    return (
        <Tooltip title={badgeContent ? newNotifications : noNotifications}>
            <IconButton
                color={iconColor}
            >
                <Badge badgeContent={badgeContent} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Tooltip>

    )
}

NotificationBell.propTypes = {
    iconColor: PropTypes.string, // Si iconColor est une chaîne de caractères
    badgeContent: PropTypes.number // ou PropTypes.string, selon ce que vous attendez
};


export default NotificationBell