import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import styles from './header.module.scss'
import Box from '@material-ui/core/Box';
import Image from 'next/image'
import Logo from '../../../assets/images/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import { indigo } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/link'
import DnsIcon from '@mui/icons-material/Dns';

export default function ImgCarousel() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
  const router = useRouter();
  const logout = () =>{
      router.push('/')
  }
    return (
      // <Container className={styles.header} maxWidth='100%'>
      //   <h1 className={styles.companyName}>
      //     testtesttest
      //   </h1>

      // </Container>

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
              <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
              <a href=''>homepage</a>
              <a href=''>product</a>
              <a href=''>service</a>
              <Link href="memberPage/memberPage">
                  <a href=''>team</a>
              </Link>
              <a href=''>about</a>
              <DnsIcon className={styles.dsnicon} />
      </Box>
      </Box>
    )
  }