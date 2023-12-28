import { Button } from "@mui/material"
import PropTypes from 'prop-types';



const CommonButton = ({children, color, disabled, size, variant, sx, onClick}) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            variant={variant}
            sx={sx}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}
CommonButton.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    variant: PropTypes.string,
    sx: PropTypes.object,
    type: PropTypes.string,
    onClick: PropTypes.func
};

export default CommonButton