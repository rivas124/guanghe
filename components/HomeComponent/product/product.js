import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import productIcon1 from '../../../assets/images/productIcon1.png'
import productIcon2 from '../../../assets/images/productIcon2.png'
import productIcon3 from '../../../assets/images/productIcon3.png'
import Image from 'next/image'
import styles from './product.module.scss'

export default function Product() {
    return (
        <Box className={styles.root}>
            <p className={styles.product_title}>product</p>
            <p className={styles.product_introduce}>To provide customers with comprehensive products and solutions around "Connected secure data"</p>
            <Box className={styles.product_root}>
                <Box className={styles.product_box}>
                    <a href=''>
                    <Image src={productIcon1} />
                    <p className={styles.product_p}>connect</p>
                    <Box className={styles.hover}>
                    <p style={{marginLeft:'20%'}}>Provide flexible</p><br/>
                    <p>Intelligent network access services</p>
                    
                </Box>
                </a>
                </Box>
                <Box className={styles.product_box}>
                    <a href=''>
                    <Image src={productIcon2} />
                    <p className={styles.product_p}>safety</p>
                    <Box className={styles.hover}>
                    <p style={{marginLeft:'20%'}}>Provide flexible</p><br/>
                    <p>Intelligent network access services</p>
                </Box>
                </a>
                </Box>
                <Box className={styles.product_box}>
                    <a href=''>
                    <Image src={productIcon3} />
                    <p className={styles.product_p}>information</p>
                    <Box className={styles.hover}>
                    <p style={{marginLeft:'20%'}}>Provide flexible</p><br/>
                    <p>Intelligent network access services</p>
                </Box>
                </a>
                </Box>
            </Box>
        </Box>
    )
}
