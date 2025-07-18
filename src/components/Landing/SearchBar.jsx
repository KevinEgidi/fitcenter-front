import React from 'react';
import { Box, InputBase, alpha, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }}
    >
      <Box
        sx={{
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SearchIcon />
      </Box>
      <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        sx={{
          color: 'inherit',
          width: '100%',
          '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
              width: '12ch',
              '&:focus': {
                width: '20ch',
              },
            },
          },
        }}
      />
    </Box>
  );
}