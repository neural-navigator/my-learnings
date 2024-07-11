import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send"

const SendIconWrapper = () => <SendIcon />;


export const MuiButton = () => {
    return (
        <div>
            <Stack spacing={4}>
                <Stack spacing={2} direction='row'>
                    <Button variant='text'>Text</Button>
                    <Button variant='contained'>contained</Button>
                    <Button variant='outlined'>outlined</Button>
                </Stack>

                <Stack spacing={2} direction='row'>
                    <Button variant="contained" color="primary">primary</Button>
                    <Button variant="contained" color="secondary">secondary</Button>
                    <Button variant="contained" color="error">error</Button>
                    <Button variant="contained" color="warning">warning</Button>
                    <Button variant="contained" color="info">info</Button>
                    <Button variant="contained" color="success">success</Button>
                </Stack>

                <Stack display='block' spacing={2} direction='row'>
                    <Button variant='contained' size='small'>Small</Button>
                    <Button variant='contained' size='medium'>medium</Button>
                    <Button variant='contained' size='large'>large</Button>
                </Stack>

            </Stack>
        </div>
    )
}