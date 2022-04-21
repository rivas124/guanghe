import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import advantageIcon1 from '../../../assets/images/advantageIcon1.png'
import advantageIcon2 from '../../../assets/images/advantageIcon2.png'
import advantageIcon3 from '../../../assets/images/advantageIcon3.png'
import advantageIcon4 from '../../../assets/images/advantageIcon4.png'
import Image from 'next/image'
import styles from './advantage.module.scss';

export default function Advantage() {
    let h3={
        marginTop:5
    }
    return (
        <Box className={styles.advantage_root}>
            <p className={styles.advantage_title}>advantage</p>
            <p className={styles.advantage_introduce}>Its own core technology professional service support market widely recognized</p>
            <Box className={styles.advantage_box}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Paper className={styles.advantage_paper} >
                                    <Image src={advantageIcon1} />
                                    <h3>hardware</h3>
                                    <p>Comprehensive hardware development capability</p>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={styles.advantage_paper} >
                                    <Image src={advantageIcon2} />
                                    <h3>software</h3>
                                    <p>Comprehensive software development system</p>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={styles.advantage_paper}>
                                    <Image src={advantageIcon3} />
                                    <h3>test</h3>
                                    <p>Advanced testing equipment</p>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={styles.advantage_paper} >
                                    <Image src={advantageIcon4} />
                                    <h3>serve</h3>
                                    <p>Excellent service support</p>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
