import { Button } from "@mui/material"
import PropTypes from 'prop-types';



const CommonButton = ({children, color, disabled, size, variant, sx}) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            variant={variant}
            sx={sx}
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
    type: PropTypes.string
};

export default CommonButton