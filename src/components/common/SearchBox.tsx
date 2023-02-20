import { Box } from '@mui/system';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    border: '1px solid black',
    borderRadius: '6px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    color: 'black',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch'
    }
  }
}));

const SearchBox = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: '50px',
          display: 'flex',
          paddingRight: { lg: '110px', xs: '0px' },
          justifyContent: 'space-between'
        }}>
        <Box sx={{ width: { lg: '100%', xs: '100%' } }}>
          <Search sx={{ marginLeft: '0px' }}>
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  width: { lg: '1em', xs: '1.5em' },
                  height: { lg: '1em', xs: '1.5em' }
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </Box>
      </Box>
    </>
  );
};

export default SearchBox;
