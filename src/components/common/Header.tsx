import { Box } from '@mui/system';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import style from '../../../styles/homepage.module.css'
import style from '../../../styles/homepage.module.css';
import {
  Avatar,
  Divider,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import logo from '../../../public/images/homepageImage/homePage/logo.png';

interface ActiveChatsProps {}

const Header: React.FC<ActiveChatsProps> = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // window.localStorage.clear();
    // router.push('/login');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('name');
    router.push('/login');
  };

  const handleClickHome = () => {
    router.push({ pathname: '/' });
  };

  // const handleClicMovies = () => {
  //   router.push('/')
  // }

  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // padding: '70px',
          paddingTop: { lg: '20px', xs: '13px' },
        }}
      >
        <Box
        // sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <Image src={logo} alt="logo" width={60} height={30} className={style.imageLogo} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            width: 'fit-content',
          }}
        >
          <Typography sx={{ minWidth: { lg: 100 } }}>
            <Link
              href="/"
              underline="none"
              onClick={handleClickHome}
              sx={{
                color: 'black',
                fontWeight: '500',
                fontFamily: 'system-ui',
                fontSize: { lg: '1rem', xs: '13px' },
                paddingRight: { lg: '0px', xs: '10px' },
                '&:hover': {
                  textDecoration: 'underline',
                  color: 'black',
                },
              }}
            >
              Home
            </Link>
          </Typography>
          <Typography sx={{ minWidth: { lg: 100 } }}>
            <Link
              onClick={handleClickHome}
              href="/"
              underline="none"
              sx={{
                color: 'black',
                fontWeight: '500',
                fontFamily: 'system-ui',
                // fontSize: {lg: '1rem'},
                fontSize: { lg: '1rem', xs: '13px' },
                paddingRight: { lg: '0px', xs: '10px' },
                '&:hover': {
                  textDecoration: 'underline',
                  color: 'black',
                },
              }}
            >
              Movies
            </Link>
          </Typography>
          <Typography sx={{ minWidth: { lg: 100 } }}>
            <Link
              href="/"
              underline="none"
              sx={{
                color: 'black',
                fontWeight: '500',
                fontFamily: 'system-ui',
                // fontSize: {lg: '1rem'},
                fontSize: { lg: '1rem', xs: '13px' },
                paddingRight: { lg: '0px', xs: '10px' },
                '&:hover': {
                  textDecoration: 'underline',
                  color: 'black',
                },
              }}
            >
              Payments
            </Link>
          </Typography>
          <Typography sx={{ minWidth: { lg: 100 } }}>
            <Link href="#" underline="none" sx={{ color: '#333333', paddingTop: '5px' }}>
              <NotificationsNoneIcon
                sx={{
                  width: { lg: '1em' },
                  height: { lg: '1em' },
                }}
              />
            </Link>
          </Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                sx={{
                  width: { lg: 35 },
                  height: { lg: 35 },
                  fontSize: { lg: '1.25rem' },
                  backgroundColor: '#F2C46F',
                }}
              >
                B
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
