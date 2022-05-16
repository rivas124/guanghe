import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        沈阳广合
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
