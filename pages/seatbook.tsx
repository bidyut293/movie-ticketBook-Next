import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from '../styles/seatbook.module.css';

import {
  Button,
  Card,
  CardContent,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import Header from '../src/common/Header';
import Footer from '../src/common/Footer';

import clocklogo from '../public/images/homepageImage/homePage/clock.png';
import { useRouter } from 'next/router';
// import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import Alert from '@mui/material/Alert';
// import { movieDataActions } from '../../src/store';

import { useSelector } from '../src/store/index'

import { useDispatch } from '../src/store'
import { getData } from '../src/store/reducers/dataSelected/dataSelected.slice'

import { seatDatas } from '../src/data/data';
import { seatDatasType } from '../src/types/constants/seatDatas.type';

import MaxWidthWrapper from '../src/common/MaxWidthWrapper'

// interface sample_seatDatas {
//   id: any;
//   name: string;
//   Booked: any;
//   Available: any;
//   Selected: any;
// }

// let seatDatas: sample_seatDatas[] = [
//   {
//     id: 1,
//     name: 'A1',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 2,
//     name: 'A2',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 3,
//     name: 'A3',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 4,
//     name: 'A4',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 5,
//     name: 'A5',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 6,
//     name: 'A6',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 7,
//     name: 'A7',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 8,
//     name: 'A8',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 9,
//     name: 'A9',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 10,
//     name: 'A10',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 11,
//     name: 'A11',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 12,
//     name: 'A12',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 13,
//     name: 'A13',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 14,
//     name: 'A14',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 15,
//     name: 'A15',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 16,
//     name: 'A16',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 17,
//     name: 'A17',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 18,
//     name: 'A18',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 19,
//     name: 'A19',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 20,
//     name: 'A20',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 21,
//     name: 'B1',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 22,
//     name: 'B2',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 3,
//     name: 'B3',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 4,
//     name: 'B4',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 5,
//     name: 'B5',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 6,
//     name: 'B6',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 7,
//     name: 'B7',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 8,
//     name: 'B8',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 9,
//     name: 'B9',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 10,
//     name: 'B10',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 11,
//     name: 'B11',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 12,
//     name: 'B12',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 13,
//     name: 'B13',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 14,
//     name: 'B14',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 15,
//     name: 'B15',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 16,
//     name: 'B16',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 17,
//     name: 'B17',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 18,
//     name: 'B18',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 19,
//     name: 'B19',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 20,
//     name: 'B20',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 1,
//     name: 'C1',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 2,
//     name: 'C2',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 3,
//     name: 'C3',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 4,
//     name: 'C4',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 5,
//     name: 'C5',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 6,
//     name: 'C6',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 7,
//     name: 'C7',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 8,
//     name: 'C8',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 9,
//     name: 'C9',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 10,
//     name: 'C10',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 11,
//     name: 'C11',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 12,
//     name: 'C12',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 13,
//     name: 'C13',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 14,
//     name: 'C14',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 15,
//     name: 'C15',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 16,
//     name: 'C16',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 17,
//     name: 'C17',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 18,
//     name: 'C18',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 19,
//     name: 'C19',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 20,
//     name: 'C20',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 1,
//     name: 'D1',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 2,
//     name: 'D2',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 3,
//     name: 'D3',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 4,
//     name: 'D4',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 5,
//     name: 'D5',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 6,
//     name: 'D6',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 7,
//     name: 'D7',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 8,
//     name: 'D8',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 9,
//     name: 'D9',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 10,
//     name: 'D10',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 11,
//     name: 'D11',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 12,
//     name: 'D12',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 13,
//     name: 'D13',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 14,
//     name: 'D14',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 15,
//     name: 'D15',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 16,
//     name: 'D16',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 17,
//     name: 'D17',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 18,
//     name: 'D18',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 19,
//     name: 'D19',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 20,
//     name: 'D20',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 1,
//     name: 'E1',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 2,
//     name: 'E2',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 3,
//     name: 'E3',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 4,
//     name: 'E4',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 5,
//     name: 'E5',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 6,
//     name: 'E6',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 7,
//     name: 'E7',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 8,
//     name: 'E8',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 9,
//     name: 'E9',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 10,
//     name: 'E10',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 11,
//     name: 'E11',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 12,
//     name: 'E12',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 13,
//     name: 'E13',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 14,
//     name: 'E14',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 15,
//     name: 'E15',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 16,
//     name: 'E16',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 17,
//     name: 'E17',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 18,
//     name: 'E18',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 19,
//     name: 'E19',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 20,
//     name: 'E20',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 1,
//     name: 'F1',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 2,
//     name: 'F2',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 3,
//     name: 'F3',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 4,
//     name: 'F4',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 5,
//     name: 'F5',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 6,
//     name: 'E6',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 7,
//     name: 'E7',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 8,
//     name: 'E8',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 9,
//     name: 'E9',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 10,
//     name: 'E10',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 11,
//     name: 'E11',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 12,
//     name: 'E12',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 13,
//     name: 'E13',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 14,
//     name: 'E14',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 15,
//     name: 'E15',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 16,
//     name: 'E16',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 17,
//     name: 'E17',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 18,
//     name: 'E18',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 19,
//     name: 'E19',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 20,
//     name: 'E20',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 1,
//     name: 'F1',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 2,
//     name: 'F2',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 3,
//     name: 'F3',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 4,
//     name: 'F4',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 5,
//     name: 'F5',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 6,
//     name: 'F6',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 7,
//     name: 'F7',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 8,
//     name: 'F8',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 9,
//     name: 'F9',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 10,
//     name: 'F10',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 11,
//     name: 'F11',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 12,
//     name: 'F12',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 13,
//     name: 'F13',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 14,
//     name: 'F14',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 15,
//     name: 'F15',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 16,
//     name: 'F16',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 17,
//     name: 'F17',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 18,
//     name: 'F18',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 19,
//     name: 'F19',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 20,
//     name: 'F20',
//     Booked: true,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 1,
//     name: 'G1',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 2,
//     name: 'G2',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 3,
//     name: 'G3',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 4,
//     name: 'G4',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 5,
//     name: 'G5',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 6,
//     name: 'G6',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 7,
//     name: 'G7',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 8,
//     name: 'G8',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 9,
//     name: 'G9',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 10,
//     name: 'G10',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 11,
//     name: 'G11',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 12,
//     name: 'G12',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 13,
//     name: 'G13',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 14,
//     name: 'G14',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 15,
//     name: 'G15',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 16,
//     name: 'G16',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 17,
//     name: 'G17',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 18,
//     name: 'G18',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 19,
//     name: 'G19',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
//   {
//     id: 20,
//     name: 'G20',
//     Booked: false,
//     Available: true,
//     Selected: false,
//   },
// ];

// interface sample_showTime {
//   value: any;
//   label: any;
// }
// const showTime: sample_showTime[] = [
//   {
//     value: '14:40',
//     label: '14:40',
//   },
//   {
//     value: '7:15',
//     label: '7:15',
//   },
//   {
//     value: '15:40',
//     label: '15:40',
//   },
//   {
//     value: '17:15',
//     label: '17:15',
//   },
//   {
//     value: '18:15',
//     label: '18:15',
//   },
//   {
//     value: '14:50',
//     label: '14:50',
//   },
//   {
//     value: '20:00',
//     label: '20:00',
//   },
//   {
//     value: '21:00',
//     label: '21:00',
//   },
// ];

let indi = 0;

let bs: any[] = [];

const Seatbook = () => {
  const router = useRouter();

  // //Redux Setup
  let selectedMovieShowData = useSelector(
    (state) => state.dataSelectedSlice.movie
  );

  const dispatch = useDispatch();

  const [seatData, setSeatData] = useState<Array<seatDatasType>>([]);
  const [reduxData, setReduxData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState();

  const [updatedData, setUpdatedData] = useState();
  const [showKursi, setShowKursi] = useState(false);

  // const [count, setCount] = useState();
  const [total, setTotal] = useState<number>(0);
  const [time, setTime] = useState<any>();

  const [passingData, setPassingData] = useState([]);

  useEffect(() => {
    setSeatData(seatDatas);
    console.log('selectedMovieShowData', selectedMovieShowData);
    setSelectedSeats(selectedMovieShowData);
    setTime(selectedMovieShowData.showTime);
  }, []);

  const handleClickBooking = () => {
    // dispatch(movieDataActions.getMovieData(passingData));
    dispatch(getData({
      movie: passingData
    }))

    console.log('selectedSeats', passingData);
    router.push('./confirmpayment/');
  };

  const handleTime = ( val: any) => {
    console.log('value', val);
    setTime(val);
    // setSelectedSeats({ ...selectedSeats, showTime: val });
  };

  const handleDateClick = (data: any) => {
    // var element = document.getElementById('card');
    // element.classList.add('active');

    console.log('data', data);
    // setSeatData({ ...setSeatData, Selected: true });

    const upd_obj = seatData.map((obj) => {
      // if (obj.Selected) {
      //   bs.push(obj);
      //   console.log('bs.length', bs.length);
      //   if (bs.length > 7) {
      //     setShowKursi(true);
      //     return;
      //   }
      // }

      if (obj.name == data.name) {
        console.log('obj', obj);
        obj.Selected = !data.Selected;
      }

      return obj;
    });

    let j = 0;
    bs = [];
    upd_obj.map((data) => {
      if (data.Selected) {
        j++;
        bs.push(data);
      }
    });

    // let tota = 150;
    // let sum = tota * bs.length;
    setTotal(selectedMovieShowData.showPrice * bs.length);

    // setTotal(150);
    setPassingData({
      ...selectedMovieShowData,
      showTime: time,
      selectedSeat: bs,
      total: selectedMovieShowData.showPrice * bs.length,
    });

    console.log("totallll",total,bs.length)
    console.log('bs_new', bs);
    setSeatData(upd_obj);
    console.log('upd_obj', upd_obj);
  };

  const handleClose = () => {
    setShowKursi(false);
  };

  return (
    <>
      {/* <div style={{ backgroundColor: 'white' }}> */}
      <MaxWidthWrapper>
        {showKursi && (
          <Snackbar
            open={showKursi}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: '100%' }}
            >
              You Reach Maximum number of seat Booking
            </Alert>
          </Snackbar>
        )}
        <Header />

        <div className={style.divmainseatbook}>
          <div>
            <Typography
              className={style.selectseattext}
              color="text.secondary"
              gutterBottom
            >
              Select seat
            </Typography>

            <Typography
              className={style.selectseattext2}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
            </Typography>
          </div>

          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '30px',
                paddingRight: '30px',
                paddingTop: '60px',
                paddingBottom: '35px',
              }}
            >
              <div>
                <Image
                  src={clocklogo}
                  alt="clocklogo"
                  style={{ marginTop: '5px' }}
                />
                <TextField
                  id="standard-select-currency-native"
                  variant="standard"
                  select
                  defaultValue={selectedMovieShowData.showTime}
                  //   SelectProps={{
                  //     native: true,
                  //   }}

                  InputProps={{
                    disableUnderline: true,
                    style: { fontSize: 25, marginLeft: '10px' },
                  }}
                >
                  {selectedMovieShowData.showTimeAll.map((option) => (
                    <MenuItem
                      key={option.showTime}
                      value={option.showTime}
                      onClick={(event) => handleTime(event, option.showTime)}
                    >
                      {option.showTime}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', marginLeft: '15px' }}>
                  <div className={style.divbox1}></div>
                  <Typography className={style.textbox1} gutterBottom>
                    Booked
                  </Typography>
                </div>

                <div style={{ display: 'flex', marginLeft: '15px' }}>
                  <div className={style.divbox2}></div>
                  <Typography className={style.textbox2} gutterBottom>
                    Available
                  </Typography>
                </div>

                <div style={{ display: 'flex', marginLeft: '15px' }}>
                  <div className={style.divbox3}></div>
                  <Typography className={style.textbox3} gutterBottom>
                    Selected
                  </Typography>
                </div>
              </div>
            </div>

            <div>
              <div className={style.divcardseatmain}>
                {seatData.map((data, ind) => {
                  // const backgroundColor = s/s/
                  // {const Booked = ''}
                  return (
                    <>
                      <div
                        style={{
                          marginRight:
                            {lg : data.name
                              .split('')
                              .splice(1, data.name.split('').length)
                              .join('') === '10'
                              ? '50px'
                              : '0px', xs: '0px'}
                          //   marginLeft:
                          //     data.name
                          //       .split('')
                          //       .splice(1, data.name.split('').length)
                          //       .join('') === '11'
                          //       ? '30px'
                          //       : '0px',
                        }}
                      >
                        {/* {console.log(
                          'getslicedata',
                          data.name
                            .split('')
                            .splice(1, data.name.split('').length)
                            .join('')
                        )} */}
                        <Card
                          sx={{
                            border: '1px solid #5A637A',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            backgroundColor: data.Booked
                              ? '#1a2c50'
                              : data.Selected
                              ? '#118EEA'
                              : '',
                          }}
                          className={style.cardboxseat}
                          id="card"
                          //   className={style.cardseat}
                          onClick={() => handleDateClick(data)}
                        >
                          <CardContent
                            style={{
                              padding: '9px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <Typography
                              className={style.seatText2}
                              color={data.Booked ? '#fff' : '#1a2c50'}
                              gutterBottom
                            >
                              {data.name}
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={style.divScreentext}>
          <Typography
            className={style.textscreen}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Screen this side
          </Typography>
        </div>

        {/* <div className={style.divScreentext}>
          <Typography
            className={style.textscreen}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Screen this side
          </Typography>
        </div> */}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingTop: '50px',
            paddingBottom: '80px',
          }}
        >
          <div className={style.div1showrupees}>
            <Typography className={style.toatalText} gutterBottom>
              Total
            </Typography>
            <Typography className={style.totalseatbook} gutterBottom>
              Rp.{total}
            </Typography>
          </div>

          <div className={style.div1showrupees}>
            <Typography className={style.toatalText} gutterBottom>
              Kursi
            </Typography>

            <Box style={{ display: 'flex' }}>
              {seatData.map((item, index) => {
                return (
                  <>
                    {item.Selected && (
                      <Typography className={style.totalseatbook} gutterBottom>
                        {item.name},
                      </Typography>
                    )}
                  </>
                );
              })}
            </Box>
          </div>
          <div className={style.btndiv}>
            <Button
              variant="outlined"
              className={style.btn1}
              //   onClick={handleClickBooking}
            >
              Change date
            </Button>
            <Button
              variant="contained"
              className={style.btn2}
              onClick={handleClickBooking}
            >
              Confirm
            </Button>
          </div>
        </div>

        <Footer />
      {/* </div> */}
      </MaxWidthWrapper>
    </>
  );
};

export default Seatbook;
