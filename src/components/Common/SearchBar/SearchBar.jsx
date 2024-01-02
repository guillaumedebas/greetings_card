import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';



const SearchBar = ({placeholder, onChange, searchBarWidth}) => {
  return (
   <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <SearchIcon />
        <Input
         placeholder={placeholder}
         onChange={onChange}
         sx={{width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
                disableUnderline
         />

   </Box>
  )
}
SearchBar.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    searchBarWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default SearchBar