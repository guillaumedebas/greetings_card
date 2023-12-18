import { Button } from "@mui/material"


const commonButton = (children, color, disabled, size, variant, sx) => {
    return (
        <Button>
            color={color}
            disabled= {disabled}
            color={size}
            variant={variant}
            sx={sx}
            {children}
        </Button>
    )
}

export default commonButton