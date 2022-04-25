import React, { Component } from 'react'
import styles from './header.module.scss'
import Box from '@material-ui/core/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Logo from '../../../assets/images/logo.png'
import Image from 'next/Image'

export default function Register() {
    return (
        <Box className={styles.box}>
            <Box className={styles.root}>
            <ButtonGroup variant="text" aria-label="text button group" className={styles.buttongroup} color='inherit'>
                        <Button>注册须知</Button>
                        <Button>帮助中心</Button>
                        <Button>联系我们</Button>
                    </ButtonGroup>
                <Box className={styles.title}>
                    <p>沈阳广合科技发展有限公司</p>
                </Box>
                <Box className={styles.movetitle}>
                    <p>沈阳广合</p>
                </Box>
            </Box>
        </Box>
    )
}
