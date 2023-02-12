import { Box } from '@mui/material';
import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from './Loader';

interface AuthComponentProps {
  children: ReactNode;
}

//Same ad MaxwidthWrapper
const AuthComponent: React.FC<AuthComponentProps> = ({ children }) => {
  const router = useRouter();
  const [page, setPage] = React.useState(true);

  useEffect(() => {
    if (localStorage.getItem('isLogin')) {
      console.log('correct path');
      // setPage(false);
      setPage(false);
    } else {
      setPage(false);
      router.push('/login');
    }
  }, []);

  return <>{page ? <Loader /> : <Box>{children}</Box>}</>;
};

export default AuthComponent;
