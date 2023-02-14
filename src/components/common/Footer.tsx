import React from 'react';
import Image from 'next/image';
import style from '../../../styles/homepage.module.css';
import { Box, Link } from '@mui/material';

import Typography from '@mui/material/Typography';

import logo from '../../../public/images/homepageImage/homePage/flogo.png';
import playStore from '../../../public/images/homepageImage/homePage/playStore.png';
import appleStore from '../../../public/images/homepageImage/homePage/playStore.png';

import insta from '../../../Images/homePage/instagram.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '35px',
          paddingTop: '65px',
          paddingBottom: '65px',
          borderTop: '2px solid #bdc5d4',
          marginBottom: '0px',
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Image src={logo} alt="logo" width={128} height={36} className={style.imglogofoot} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Link
            sx={{
              textDecoration: 'none',
              fontFamily: 'system-ui',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: { lg: '18px', xs: '12px' },
              lineHeight: { lg: '40px' },
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              color: '#333333',
            }}
          >
            Perusahaan
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Kontak Kami
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Tentang
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Partner
          </Link>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Link
            sx={{
              textDecoration: 'none',
              fontFamily: 'system-ui',
              fontStyle: 'normal',
              fontWeight: '500',
              // fontSize: '18px',
              // lineHeight: '40px',
              // fontSize: {lg:'18px', xs: '80px'},
              // lineHeight: {lg:'40px', xs: '60px'},
              fontSize: { lg: '18px', xs: '12px' },
              lineHeight: { lg: '40px' },
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              color: '#333333',
            }}
          >
            Seputar
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            TIX ID News
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Bioskop
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Tiket Saya
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              // lineHeight: '42px',
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Pembayaran
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Cicilan
          </Link>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Link
            sx={{
              textDecoration: 'none',
              fontFamily: 'system-ui',
              fontStyle: 'normal',
              fontWeight: '500',
              // fontSize: '18px',
              // lineHeight: '40px',
              // fontSize: {lg:'18px', xs: '80px'},
              // lineHeight: {lg:'40px', xs: '60px'},
              fontSize: { lg: '18px', xs: '12px' },
              lineHeight: { lg: '40px' },
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              color: '#333333',
            }}
          >
            Dukungan
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Pusat Bantuan
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Kebijakan Privasi
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            FAQ
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Syarat dan Ketentuan
          </Link>
          <Link
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              // fontSize: '16px',
              // lineHeight: '42px',
              fontSize: { lg: '16px', xs: '10px' },
              lineHeight: { lg: '42px' },
              /* identical to box height, or 150% */
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#333333',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                borderBottom: '1px solid #333333',
                width: 'fit-content',
              },
            }}
          >
            Update Covid-19
          </Link>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Link
            sx={{
              textDecoration: 'none',
              fontFamily: 'system-ui',
              fontStyle: 'normal',
              fontWeight: '500',
              // fontSize: '18px',
              // lineHeight: '40px',
              // fontSize: {lg:'18px', xs: '60px'},
              // lineHeight: {lg:'40px', xs: '60px'},
              fontSize: { lg: '18px', xs: '12px' },
              lineHeight: { lg: '40px' },
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              color: '#333333',
            }}
          >
            Follow Social Media
          </Link>

          <Box sx={{ display: 'flex', lineHeight: '30px' }}>
            {/* <Image src={insta} className={style.sociallogof} alt="logo" />
            <Image src={insta} className={style.sociallogof} alt="logo" />
            <Image src={insta} className={style.sociallogof} alt="logo" /> */}

            <Box>
              <InstagramIcon
                // className={style.sociallogof}
                sx={{
                  margin: { lg: '15px', xs: '10px' },
                  marginLeft: '1px',
                  cursor: 'pointer',
                  color: '#333333',
                  width: { lg: '1em', xs: '15px' },
                  height: { lg: '1em', xs: '15px' },
                }}
              />
            </Box>

            <Box>
              <TwitterIcon
                sx={{
                  // margin: '15px',
                  margin: { lg: '15px', xs: '10px' },
                  marginLeft: '1px',
                  cursor: 'pointer',
                  color: '#333333',
                  width: { lg: '1em', xs: '15px' },
                  height: { lg: '1em', xs: '15px' },
                }}
              />
            </Box>

            <Box>
              <FacebookIcon
                sx={{
                  // margin: '15px',
                  margin: { lg: '15px', xs: '10px' },
                  marginLeft: '1px',
                  cursor: 'pointer',
                  color: '#333333',
                  width: { lg: '1em', xs: '15px' },
                  height: { lg: '1em', xs: '15px' },
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h5"
              // className={style.moviesh5text}
              sx={{
                color: '#333333',
                fontFamily: 'system-ui',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: { lg: '18px', xs: '9px' },
                lineHeight: { lg: '60px' },
                // color: 'black',
              }}
            >
              Download Aplikasi TIX ID
            </Typography>
          </Box>

          <Box
            sx={{
              lineHeight: '60px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Image src={playStore} className={style.playlogo} alt="playStore" />
            <Image src={appleStore} className={style.playlogo} alt="appleStore" />
          </Box>

          <Box>
            <Typography
              variant="h5"
              //   className="moviesh5text"
              sx={{
                color: '#333333',
                fontFamily: 'system-ui',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: { lg: '12px', xs: '10px' },
                lineHeight: { lg: '90px' },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              2021 TIX ID - PT Nusantara Elang Sejahtera.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
