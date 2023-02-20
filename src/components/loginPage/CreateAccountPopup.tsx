import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
} from '@mui/material';
import Image from 'next/image';
import Applogo from '../../../public/images/homepageImage/homePage/logo.png';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const CreateAccountPopup = (props: any) => {
  const { showPage, setShowPage, setAccountData } = props;
  const [warn, setWarn] = React.useState(false);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  useEffect(() => {
    var re = new RegExp(
      /(?=^.{6,32}$)(?=(?:.*?\d){1})(?=.*[a-z])(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%*()_+^&]*$/
    );

    // && re.test(formData.password)
    if (formData.number.length === 10) {
      setErrorNumber(false);
    } else {
      setErrorNumber(true);
    }

    if (re.test(formData.password)) {
      setErrorPassword(false);
    } else {
      setErrorPassword(true);
    }
  }, [formData]);

  const handleClose = () => {
    setShowPage(false);
  };

  const handleChangeField = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    // if()
  };

  const handleSubmit = () => {
    if (formData.number == '' || formData.name == '' || formData.password == '') {
      setWarn(true);
    } else {
      setAccountData(formData);
      handleClose();
    }
  };

  const handleCloseWarn = () => {
    setWarn(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event: string) => {
  //   event.preventDefault();
  // };

  return (
    <>
      {warn && (
        <Snackbar open={warn} autoHideDuration={3000} onClose={handleCloseWarn}>
          <Alert onClose={handleCloseWarn} severity="error" sx={{ width: '100%' }}>
            Please fill Proper details
          </Alert>
        </Snackbar>
      )}
      <Dialog
        open={showPage}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
          id="alert-dialog-title"
        >
          <Image src={Applogo} alt="Appp logo" width={60} height={30} />
        </DialogTitle>
        <DialogTitle
          sx={{ marginLeft: '15px', fontSize: '25px', fontWeight: 'bold' }}
          id="alert-dialog-title"
        >
          {'Create New Account'}
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '40vw',
          }}
        >
          <TextField
            sx={{ margin: '15px' }}
            id="outlined-basic"
            name="name"
            value={formData.name}
            onChange={(e) => handleChangeField(e)}
            label="Name"
            variant="outlined"
            type={'text'}
          />
          <TextField
            sx={{ margin: '15px' }}
            id="outlined-basic"
            name="number"
            value={formData.number}
            onChange={(e) => handleChangeField(e)}
            label="Phone number"
            variant="outlined"
            type={'number'}
            error={errorNumber}
            // helperText={errorNumber ? 'Wrong Number' : ''}
          />
          {/* <TextField
            sx={{ margin: '15px' }}
            id="outlined-basic"
            label="Password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChangeField(e)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <RemoveRedEyeIcon />
                </InputAdornment>
              ),
            }}
            // iconStart={<RemoveRedEyeIcon />
            type={'password'}
          /> */}
          <FormControl sx={{ margin: '15px', width: '94%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              error={errorPassword}
              //   helperText={errorPassword ? 'Wrong Password' : ''}
              value={formData.password}
              onChange={(e) => handleChangeField(e)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              fontSize: '15px',
              fontWeight: '500',
              color: '#1A2C50',
              cursor: 'pointer',
              border: '1px solid #1A2C50',
              '&:hover': {
                color: '#fff',
                backgroundColor: '#1A2C50',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            disabled={errorNumber || errorPassword ? true : false}
            sx={{
              fontSize: '15px',
              fontWeight: '500',
              color: '#1A2C50',
              cursor: 'pointer',
              border: '1px solid #1A2C50',
              '&:hover': {
                color: '#fff',
                backgroundColor: '#1A2C50',
              },
            }}
            // autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateAccountPopup;
