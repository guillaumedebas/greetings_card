import NotificationBell from '../NotificationBell/NotificationBell';
import Avatar from '@mui/material/Avatar';
import photoguillaume from '../../assets/photo-guillaume-debas.webp'
import CommonButton from '../Common/CommonButtom/CommonButtom';

const Header = () => {
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

        </div>
    )
}

export default Header