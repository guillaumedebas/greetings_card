import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import BasicMenu from '../../components/BasicMenu/BasicMenu';
import { useState } from 'react';


const NotificationBell = ({ iconColor, badgeContent }) => {
    const newNotifications = `You have ${badgeContent} messages`
    const noNotifications = "No messages"
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const notifications = [
        {
            id: 0,
            label: 'First notification'
        },
        { 
            id: 1,
            label: 'second notification'
        },
        { 
            id: 2,
            label: 'third notification'
        }
    ]
    return (
        <div>
            <Tooltip title={notifications.length ? newNotifications : noNotifications}>
                <IconButton
                    color={iconColor}
                    onClick={notifications.length ? handleOpen : null}
                >
                    <Badge badgeContent={notifications.length} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={notifications}
            />
        </div>
    )
}

NotificationBell.propTypes = {
    iconColor: PropTypes.string,
    badgeContent: PropTypes.number
};


export default NotificationBell