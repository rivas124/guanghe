import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import styles from './footer.module.scss'


export default function Footer() {
    return(
        <Box className={styles.footer_root}>
            <Box className={styles.footer_a}>
                <a href=''>about guanghe</a>
                <a href=''>product service</a>
                <a href=''>solution</a>
                <a href=''>technical support</a>
                <a href=''>company news</a>
            </Box>
            <p>© 2022 沈阳广合科技发展有限公司</p>
        </Box>
    )
}