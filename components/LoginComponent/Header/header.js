import React from 'react'
import Box from '@mui/material/Box';
import styles from './header.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import axios from 'axios'
import { useRouter } from 'next/router';
import { userInfo } from 'os';
import Image from 'next/image'
import headerPortrait from '../../../public/img/user2.webp'

let c=0;
export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [info , setInfo] = React.useState(null)
    const router = useRouter();

    var userInfo = [] 
    React.useEffect(()=>{
        axios.get('http://192.168.31.163:3000/getUserInfo?tel='+919876543215).then((res) => {
            userInfo = res.data.data[0]
            setInfo(userInfo)
        })
    },[])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        router.push("/");
        sessionStorage.clear()
    };

    const settingClick = () => {
        router.push('/user')
    }
    let s = global.sessionStorage
      if(global.sessionStorage){
          c = s.length
      }

    const member = () => {
        window.scroll({
            top: 1900,
            behavior: "smooth"
          });
    }
    return (
        <Box className={styles.box}>
            <Box className={styles.root}>
                <p>沈阳广合科技发展有限公司</p>
            </Box>
            <Box>
                <ButtonGroup variant="text" aria-label="text button group" className={styles.buttongroup} color='inherit'>
                    <Button onClick={() => {
                        router.push('/')
                    }}>首页</Button>
                    <Button onClick={member}>成员</Button>
                    <Button onClick={(() =>{
                         window.scroll({
                            top: 700,
                            behavior: "smooth"
                          });
                    })}>关于</Button>
                    <Button 
                    onClick={(() =>{
                        window.scroll({
                           top: 2500,
                           behavior: "smooth"
                         });
                   })}>新闻</Button>
                    <Button 
                    onClick={(() =>{
                        window.scroll({
                           top: 1500,
                           behavior: "smooth"
                         });
                   })}>服务</Button>
                    <Button >联系我们</Button>
                </ButtonGroup>
                {c>0?
                <Box className={styles.portrait}>
                    <Box className={styles.walls}>
                        <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            color="inherit"
                            style={{ width: '20%'}}
                        >
                            <Image
                                src={headerPortrait}
                                width={70} height={70}
                                className={styles.makeImageCircular}
                            ></Image>  
                        </Button>                        
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={settingClick}>用户设置</MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                </Box>
                    :''}
            </Box>
        </Box>
    )
}