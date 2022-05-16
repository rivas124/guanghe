import Grid from '@mui/material/Grid';
import styles from './styles.module.scss'
import Typography from "@mui/material/Typography";

export function Serve(){
    return(
        <Grid container direction="column" justifyContent="center" alignItems="center"  className={styles.root}>
                <Typography color={'#ffffff'} variant="h5" gutterBottom>服务中心</Typography>
                <Typography color={'#ffffff'} variant="subtitle1" gutterBottom>PRODUCTS SERVICES</Typography>
                <Typography color={'#ffffff'} variant="h4"> — </Typography>
                <Typography color={'#ffffff'} variant="subtitle1" gutterBottom>成为优质的电子商务产品服务提供商</Typography>
                <Typography color={'#ffffff'} variant="subtitle1" gutterBottom>CHINA IS COMMITTED TO PROMOTING INFORMATION TECHNOLOGY, AND YOUR MOST TRUSTED PARTNER</Typography>
        </Grid>
    )
}