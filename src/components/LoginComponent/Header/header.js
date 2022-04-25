import React from 'react'
import Box from '@material-ui/core/Box';
import styles from './header.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Logo1 from '../../../assets/images/logo (1).png'
import Image from 'next/Image'

export default function Header() {
    return (
        <Box className={styles.box}>
            <Box className={styles.root}>
                <p>沈阳广合科技发展有限公司</p>
            </Box>
            <Box>
                <ButtonGroup variant="text" aria-label="text button group" className={styles.buttongroup} color='inherit'>
                    <Button className='dhl'>初代网页</Button>
                    <Button className='dhl'>海外登陆</Button>
                    <Button className='dhl'>企业邮箱</Button>
                    <Button className='dhl'>后期修改</Button>
                    <Button className='dhl'>广合科技</Button>
                    <Button className='dhl'>Github</Button>
                </ButtonGroup>
            </Box>
        </Box>
    )
}