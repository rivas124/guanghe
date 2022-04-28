import React, { Component } from 'react'
import Box from '@mui/material/Box';
import styles from './footer.module.scss'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function Footer() {
    return (
    <>
        <Box className={styles.root}>
        <ButtonGroup variant="text" aria-label="text button group" className={styles.buttongroup} color='inherit'>
                 <Button>关于我们</Button>
                 <Button>帮助中心</Button>
                 <Button>联系我们</Button>
                 <Button>客服中心</Button>
                 <Button>广合科技</Button>
            </ButtonGroup>
            <p className={styles.footer}>沈阳广合科技发展有限公司版权所有©2022</p>
        </Box>
    </>
    )
}
