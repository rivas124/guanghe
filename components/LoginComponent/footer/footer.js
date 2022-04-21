import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import styles from './footer.module.scss'

export default function footer() {
    return (
        <Box className={styles.root}>
            <p className={styles.footer}>沈阳广合科技发展有限公司版权所有©2022</p>
        </Box>
    )
}
