import React, { Component } from 'react'
import Logo from '../../../assets/images/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@material-ui/core/Box';
import flashviewone from '../../../assets/images/flashview1.jpeg'
import flashviewtwo from '../../../assets/images/flashview3.jpeg'
import { indigo } from '@material-ui/core/colors'
import Image from 'next/image'
import styles from './header.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link'

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box className='header' maxWidth='100%'>
            <Box className={styles.header_navigation}>
                <Image src={Logo}
                    width={70}
                    height={50}
                    className={styles.compony_logo}
                />
                <Box className={styles.usermanagement}>
                    <PersonIcon className='profile-icon' sx={{ fontSize: 30 }} 
                       style={{ color: indigo[50] }}
                    />
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={styles.dropdownbutton} color='inherit'>
                        <ArrowDropDownIcon sx={{ fontSize: 25 }} />
                    </Button>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <a href=''>homepage</a>
                <a href=''>product</a>
                <a href=''>service</a>
                <Link href="memberPage/memberPage">
                <a href=''>team</a>
                </Link>
                <a href=''>about</a>
            </Box>
            <Box className={styles.ArrowDropDownIconcarouselbox}>
                <Carousel autoPlay infiniteLoop>
                    <Image src={flashviewone}/>
                    <Image src={flashviewtwo}/>
                </Carousel> 
                </Box>
        </Box>
    )
}
