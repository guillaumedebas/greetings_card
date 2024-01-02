import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import PropTypes from 'prop-types'

const BasicMenu = ({anchorEl,handleClose, open, menuItems }) => {
            return (
            <div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                 {menuItems.map((item) => (
                    <MenuItem 
                    key={item.id}
                   onClick={handleClose}
                   >
                    {item.label}
                    </MenuItem>
                ))}
                
                    
                  
                </Menu>
            </div>
        )
    }
BasicMenu.propTypes = {
    anchorEl: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.instanceOf(Element),
    ]),
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired
};


export default BasicMenu