import React, { Component } from 'react'
import Box from '@mui/material/Box';
import styles from './footer.module.scss'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export default function Footer() {
    const router = useRouter();
    return (
    <>
        <Box className={styles.root}>
        <ButtonGroup variant="text" aria-label="text button group" className={styles.buttongroup} color='inherit'>
                 <Button 
                    onClick={(() =>{
                         window.scroll({
                            top: 700,
                            behavior: "smooth"
                          });
                    })}>关于我们</Button>
                 <Button>帮助中心</Button>
                 <Button>联系我们</Button>
                 <Button>客服中心</Button>
                 <Button 
                 onClick={(() =>{
                    window.scroll({
                       top: 0,
                       behavior: "smooth"
                     });
               })}>广合科技</Button>
            </ButtonGroup>
            <p className={styles.footer}>沈阳广合科技发展有限公司版权所有©2022</p>
        </Box>
    </>
    )
}
