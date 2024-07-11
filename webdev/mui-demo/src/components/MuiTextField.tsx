import React from 'react';
import  { Stack, TextField } from '@mui/material';

const MuiTextField = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='name' variant='outlined'></TextField>
            <TextField label='name' variant='filled'></TextField>
            <TextField label='name' variant='standard'></TextField>
        </Stack>
    </Stack>
  )
}

export default MuiTextField
