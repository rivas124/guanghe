import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import Image from "next/image";


export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1,width:'100%',height:'630px' ,marginTop:'30rem'}}>
            <Grid container spacing={2}>
                <Grid item xs={10} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid p={12}>
                            <Typography variant="h4" gutterBottom>
                                关于我们
                            </Typography>
                             <Typography variant="body2" gutterBottom>
                                ABOUT US
                            </Typography>
                            <Typography color={'#82b1ff'} variant="h5" gutterBottom>
                                —
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                成为电子商务产品服务提供商。存储、计算、监控、安全...你所需要的云产品，我们均能以业界水平为你提供。
                                通过互联网服务提升人类生活品质，使产品和服务像水和电一样源源不断融入人们的生活，为人们带来便捷和愉悦；
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid p={15}>
                    <Image src="/../public/img/download.png" width={379} height={212}  alt={''}/>
                </Grid>
                <Grid container direction="row" justifyContent="space-around" alignItems="center">
                    <Grid>
                        <Typography color={'#82b1ff'} variant="h1" gutterBottom>
                            7
                        </Typography>
                        <Typography color={'#82b1ff'} variant="h3" gutterBottom>
                            YEARS
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography color={'#82b1ff'} variant="h1" gutterBottom>
                            5000+
                        </Typography>
                        <Typography color={'#82b1ff'} variant="h3" gutterBottom>
                            SECECTS
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography color={'#82b1ff'} variant="h1" gutterBottom>
                            100+
                        </Typography>
                        <Typography color={'#82b1ff'} variant="h3" gutterBottom>
                            INDUSTRY
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}