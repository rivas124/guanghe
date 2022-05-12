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
import Image from 'next/image'
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;


const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>2
          <ListItem >
            <ListItemText>
              电话:xxx xxxx xxx<br/>
              邮箱:xxxxxxxx@xxx.com
            </ListItemText>
            <ListItemText></ListItemText>
          </ListItem>
      </List>
    </Dialog>
  );
}

let c=0;
export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [info , setInfo] = React.useState(null)
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const DialoghandleClose = () => {
    setOpen(false);
  };

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
        router.push(
            {
            pathname:'/user'
        })
        
    }
    let s = global.sessionStorage
      if(global.sessionStorage){
          c = s.length
      }

      React.useEffect(() => {
          setInfo(global.sessionStorage.getItem('img'))
      })
      console.log(info)
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
                    <Button onClick={(() =>{
                         window.scroll({
                            top: 1900,
                            behavior: "smooth"
                          });
                    })}>成员</Button>
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
                    <Button 
                        onClick={handleClickOpen}
                    >联系我们</Button>
                </ButtonGroup>
                <SimpleDialog
                    open={open}
                    onClose={DialoghandleClose}
                />
            </Box>
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
                                src={'http://192.168.31.163:3000/'+info}
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
    )
}