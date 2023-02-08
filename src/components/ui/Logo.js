import { Typography, Box } from '@mui/material';

const Logo = ({ inFooter = false }) => {
    return (
        <Typography
            display="inline-block"
            borderBottom={inFooter && '2px solid'}
            color="light.main"
            component="h1"
            variant="h3"
            fontWeight="bold"
            ml={{ md: inFooter ? 0 : 4 }}
            pb={{ xs: inFooter ? 0 : 2, md: inFooter ? 2 : 0 }}
        >
            Guid
            <Box display="inline" color="success.main">
                .
            </Box>
            <Box display="inline" color="secondary.main">
                io
            </Box>
        </Typography>
    );
};
export default Logo;
