import React from 'react';
import { Box, Button, Chip, Divider, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import style from '../../../styles/confirmPayment.module.css';
import { SelectedShowReduxType } from '../../store/reducers/selected-show/SelectedShow.slice';

interface paymentProps {
  selectedMovieShowData: SelectedShowReduxType | undefined;
  btn: boolean;
  handleChangeCoupenField: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  AddCoupen: () => void;
  coupen: string | undefined;
  handleDelete: () => void;
  coupenPrice: number;
  handleBookTicket: () => void;
}

const Payment: React.FC<paymentProps> = ({
  selectedMovieShowData,
  btn,
  handleChangeCoupenField,
  AddCoupen,
  coupen,
  handleDelete,
  coupenPrice,
  handleBookTicket
}) => {
  // console.log({ price });
  return (
    <Box
      sx={{
        width: { lg: '60%', xs: '100%' },
        display: 'flex',
        justifyContent: { lg: 'end' }
      }}>
      <Box className={style.divconfirmpapermain}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            paddingLeft: '28px',
            paddingRight: '38px'
          }}>
          <Typography className={style.confirmordertext1} gutterBottom>
            confirm Order
          </Typography>

          <Typography className={style.confirmorderdetails} gutterBottom>
            Details
          </Typography>

          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className={style.confirmordertext2} gutterBottom>
              REGULAR SEAT
            </Typography>

            <Typography className={style.confirmordertext2} gutterBottom>
              {selectedMovieShowData?.price}.00
              <span style={{ fontWeight: 'bold', paddingLeft: '10px' }}>
                X{selectedMovieShowData?.selectedSeats.length}
              </span>
            </Typography>
          </Box>

          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '30px'
            }}></Box>

          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <Typography className={style.confirmordertext2} gutterBottom>
              Sub Total
            </Typography>

            {selectedMovieShowData?.selectedSeats && (
              <Typography className={style.confirmordertext2} gutterBottom>
                Rp.{selectedMovieShowData?.selectedSeats.length * selectedMovieShowData?.price}.000
              </Typography>
            )}
          </Box>

          <Typography className={style.confirmorderdetails} gutterBottom>
            Promo & Voucher
          </Typography>

          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '10px',
              alignItems: 'center'
            }}>
            {btn ? (
              <>
                <TextField
                  id="standard-basic"
                  onChange={e => handleChangeCoupenField(e)}
                  // label="Coupen Code"
                  variant="outlined"
                  inputProps={{
                    sx: {
                      padding: '10px'
                    }
                  }}
                  // sx={{ }}
                />

                <Button
                  sx={{ backgroundColor: '#1a2c50', padding: '10px', height: 'fit-content' }}
                  onClick={AddCoupen}
                  variant="contained">
                  <AddIcon sx={{ mr: 1 }} />
                  apply coupen
                </Button>
              </>
            ) : (
              <>
                <Chip
                  label={coupen}
                  variant="outlined"
                  // onClick={handleDeleteCoupen}
                  onDelete={handleDelete}
                />
              </>
            )}
          </Box>

          {!btn && (
            <Box
              sx={{
                display: 'flex',
                paddingBottom: '20px',
                justifyContent: 'space-between'
              }}>
              <Typography className={style.confirmordertext2} gutterBottom>
                {coupen}
              </Typography>

              <Typography className={style.confirmordertext2} gutterBottom>
                -{coupenPrice}.000
              </Typography>
            </Box>
          )}

          <Divider />

          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className={style.confirmordertotal} gutterBottom>
              Total
            </Typography>
            {selectedMovieShowData?.price && (
              <Typography className={style.confirmordertotal} gutterBottom>
                Rp.
                {selectedMovieShowData?.price * selectedMovieShowData?.selectedSeats.length -
                  coupenPrice}
                .000
              </Typography>
            )}
          </Box>
          <Divider />

          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className={style.confirmorderpaymentmode} gutterBottom>
              payment mode
            </Typography>
            <Typography className={style.paymentmodecard} gutterBottom>
              Debit Card
            </Typography>
          </Box>

          <Typography className={style.paymentmodecardbank} gutterBottom>
            DANA
          </Typography>

          <Button variant="contained" className={style.btnbookTicket} onClick={handleBookTicket}>
            Book Ticket
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
