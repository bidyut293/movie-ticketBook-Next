import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { area } from '../../../data/mainData';
import { MenuItem } from '@mui/material';

interface AreaDropdownProps {
  changeSelectedAreaHandle: (value: string) => void;
}

const AreaDropdown: React.FC<AreaDropdownProps> = ({ changeSelectedAreaHandle }) => {
  return (
    <Box style={{ paddingTop: '50px' }}>
      <LocationOnOutlinedIcon
        sx={{
          color: 'black',
          width: { lg: '31px', xs: '25px' },
          height: { lg: '31px', xs: '45px' }
        }}
      />
      <TextField
        id="standard-select-currency"
        select
        sx={{
          marginLeft: '5px',
          width: { xs: '40vw', lg: '16vw' },
          fontSize: { lg: '2rem', xs: '0.3rem' }
        }}
        defaultValue="All"
        variant="standard"
        inputProps={{
          sx: {
            fontSize: { lg: '18px', xs: '20px' },
            minHeight: {
              lg: '1.4375em !important',
              xs: '0.4em !important'
            },
            padding: { lg: '4px 0 5px', xs: '10px 0 5px' }
          }
        }}>
        {area.map(option => (
          <MenuItem
            sx={{ fontSize: { xs: '20px' } }}
            key={option.value}
            value={option.value}
            // onClick={e => handleAreaClick(e, option.value)}>
            onClick={() => changeSelectedAreaHandle(option.id)}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
export default AreaDropdown;
