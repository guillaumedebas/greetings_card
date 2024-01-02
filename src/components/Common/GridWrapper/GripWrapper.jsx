import { Grid } from "@mui/material"
import PropTypes from 'prop-types';
import { gridWrappersStyles } from './styles';

const GripWrapper = ({children}) => {
    return (
        <Grid
            item xs={12}
            sx={{ gridWrappersStyles }}
        >
            {children}
        </Grid>
    )
}
GripWrapper.propTypes = {
    children: PropTypes.node
};

export default GripWrapper