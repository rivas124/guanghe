import React, { Component } from 'react'
import Box from '@mui/material/Box';
import styles from './styles.module.scss'

export default function ServeComponent(){
    return(
        <Box className={styles.root}>
                <p className={styles.title}>服务中心</p>
                <p className={styles.text}>PRODUCTS SERVICES</p>
                <hr></hr>
                <p className={styles.text2}>成为优质的电子商务产品服务提供商</p>
                <p className={styles.text3}>CHINA IS COMMITTED TO PROMOTING INFORMATION TECHNOLOGY, AND YOUR MOST TRUSTED PARTNER</p>
        </Box>
    )
}