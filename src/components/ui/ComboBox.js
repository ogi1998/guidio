import styled from '@emotion/styled';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { useRef, useState } from 'react';

const ComboBox = () => {
	const anchorRef = useRef();
	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const handleClick = () => {
		setAnchorEl(anchorRef.current);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
    const RoundedButton = styled(Button)(({ theme }) => ({
        '&': {
            borderRadius: '20px',
            border: 'none',
            boxShadow: `0px 1px 10px ${theme.palette.secondary.main}`,
            '&:hover': {
                border: 'none',
                backgroundColor: 'unset',
                boxShadow: `0px 1px 15px ${theme.palette.secondary.main}`,
                transition: '.1s ease',
            },
        },
    }));

    return (
        <Box ref={anchorRef}>
            <RoundedButton
                size="large"
                onClick={handleClick}
            >
                Popular{' '}
                <KeyboardArrowDown
                    sx={{
                        ml: 1,
                        borderWidth: 2,
                        borderStyle: 'solid',
                        borderColor: 'dark.main',
                        borderRadius: '50%',
                    }}
                />
            </RoundedButton>
            <Menu open={open} onClose={handleClose} anchorEl={anchorEl} sx={{margin: '0', padding: '0'}}>
                <MenuItem>Popular</MenuItem>
                <MenuItem>New</MenuItem>
            </Menu>
        </Box>
    );
};
export default ComboBox;
