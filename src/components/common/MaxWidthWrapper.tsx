import Box from '@mui/material/Box';
import { ReactNode } from 'react';

interface MaxWidthWrapperProps {
  children: ReactNode;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: '1536px',
        backgroundColor: '#fff',
        width: {
          xs: '95%',
          md: '90%',
        },
        margin: 'auto',
      }}
    >
      {children}
    </Box>
  );
};
export default MaxWidthWrapper;
