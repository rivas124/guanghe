import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import styles from './footer.module.scss'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function Footer() {
    return (
        <Box className={styles.root}>
            <Box className={styles.footerleft}>
                <p style={{ textAlign: 'right', marginTop: 20 }}>沈阳广合科技发展有限公司<br />
                    版权所有  ©2022</p>
            </Box>
            <Box className={styles.footerright}>
                <ButtonGroup variant="text" aria-label="text button group" className={styles.buttongroup} color='inherit'>
                    <Button>注册须知</Button>
                    <Button>帮助中心</Button>
                    <Button>联系我们</Button>
                </ButtonGroup>
            </Box>
        </Box>
    )
}
