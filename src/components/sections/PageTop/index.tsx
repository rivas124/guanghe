import React, { Component } from 'react'
import Box from '@mui/material/Box';
import logo from '../../../assets/images/logo (1).png'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@mui/material/Button';
import styles from '../../LoginComponent/Header/header.module.scss'

export default function Header() {
    return(
        <Box  className={styles.box} style={{width:'100%',height:'4.5rem',backgroundColor:'white',position:'absolute'}}>
            <Box style={{width:'3%',marginLeft:'16%',position:'relative',top:'15%'}}>
            <Image src={logo}/>
            </Box>
            <p style={{fontSize:'1.5rem',width:'20%',position:'relative',left:'19%',bottom:'50%'}}>沈阳广合科技发展有限公司</p>

            {/* <Box style={{display:'flex',fontSize:'1rem',marginLeft:'59%',position:'relative',bottom:'100%'}}>
                <Link href='/'>
                    <a style={{margin:'0 1rem'}}>主页</a>
                </Link>
                <Link href='/'>
                    <a style={{margin:'0 1rem'}}>成员</a>
                </Link>
                <Link href='/blog'>
                    <a style={{margin:'0 1rem'}}>日志</a>
                </Link>
                <Link href='/'>
                    <a style={{margin:'0 1rem'}}>关于</a>
                </Link>
                <Link href='/App'>
                    <a style={{margin:'0 1rem'}}>个人信息</a>
                </Link>
            </Box> */}
        </Box>
    )
}
