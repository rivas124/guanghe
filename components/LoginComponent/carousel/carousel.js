import React, { Component } from 'react'
import Box from '@mui/material/Box';
import styles from './carousel.module.scss'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'
import { Carousel as ImgCarousel } from 'react-responsive-carousel';
import loginImg2 from '../../../assets/images/login/LoginPage2.jpeg'
import loginImg1 from '../../../assets/images/login/LoginPage1.jpeg'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

let c=0;
export default function Carousel() {
    const [value, setValue] = React.useState(0);
    const [userlogincode, setUserlogincode] = React.useState('');
    const [userloginpwd, setUserloginpwd] = React.useState('');
    const [alert, setAlert] = React.useState(false);
    const [alert1, setAlert1] = React.useState(false);
    const [alert2, setAlert2] = React.useState(false);
    const [alert3, setAlert3] = React.useState(false);
    const [alert4, setAlert4] = React.useState(false);
    const [alert5, setAlert5] = React.useState(false);
    const [usercode, setUsercode] = React.useState('');
    const [userpwd, setUserpwd] = React.useState('');
    const [userpassword, setUserpassword] = React.useState('');
    const [tel, setTel] = React.useState('');
    const router = useRouter();
    
    const loginHandleClick = () => {
        
        if (userlogincode === '') {
            document.getElementById('hid').style.display = 'block'
        } else if (userloginpwd === '') {
            document.getElementById('pwdhid').style.display = 'block'
            console.log(userloginpwd)
        } else {
            var url = "http://192.168.31.163:3000/login";
            var data = { "usercode": userlogincode, "userpwd": userloginpwd }
            axios.post(url, data,).then(res => {
                if (res.data.code === -1) {
                    setAlert(true)
                } else {
                    // localStorage.setItem('token',res.data.data.token);
                    // localStorage.setItem('username',res.data.data.userInfo.username)
                    global.sessionStorage.setItem('token', res.data.data.token);
                    global.sessionStorage.setItem('username', res.data.data.userInfo.username)
                    setAlert4(true)
                    router.push('/');
                }
            })
        }
    }

    const regHandleClick = () => {
        if(userpwd !== userpassword){
            setAlert2(true)
        }else if(usercode === '' || userpwd === '' || userpassword === '' || tel === ''){
            setAlert3(true)
        }else{
        var url = "http://192.168.31.163:3000/register";
        var data = { "usercode": usercode, "userpwd": userpwd, "tel": tel }
        axios.post(url, data,).then(res => {
            if (res.data.code === -1) {
                setAlert1(true)
            }else{
                setAlert5(ture)
            }
        })
    }
}

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let s = global.sessionStorage
      if(global.sessionStorage){
          c = s.length
      }
    return (
        <Box style={{ height: '100px' }}>
            <Box>
                {alert ?
                    <Alert
                        severity="error"
                        variant="filled"
                        action={
                            <IconButton
                                aria-label="close"
                                size="small"
                                onClick={() => {
                                    setAlert(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2, position: 'absolute', zIndex: 1000, width: '30%' }}
                    >
                        用户名或密码错误
                    </Alert>
                    : <></>}
            </Box>
            <Box>
            {alert1 ? 
            <Alert 
            severity="error" 
            variant="filled"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setAlert1(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
          注册失败,请重试
        </Alert>
                :<></>}
            </Box>

            <Box>
            {alert2 ? 
            <Alert 
            severity="error" 
            variant="filled"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setAlert2(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
         不能为空
        </Alert>
                :<></>}
            </Box>

            <Box>
            {alert3 ? 
            <Alert 
            severity="error" 
            variant="filled"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setAlert3(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
         两次密码输入不一致
        </Alert>
                :<></>}
            </Box>

            <Box>
            {alert4 ? 
            <Alert 
            severity="success" 
            variant="filled"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setAlert4(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
         登陆成功
        </Alert>
                :<></>}
            </Box>

            <Box>
            {alert5 ? 
            <Alert 
            severity="success" 
            variant="filled"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setAlert5(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
        注册成功
        </Alert>
                :<></>}
            </Box>
            <Box className={styles.middle}>
                <ImgCarousel autoPlay infiniteLoop
                    width='100%'
                >
                    <Image src={loginImg1} />
                    <Image src={loginImg2} />
                </ImgCarousel>
            </Box>
          {c==0 ?
            <Box className={styles.form}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        style={{marginTop:'5%'}}
                        >
                        <Tab label="登录" {...a11yProps(0)} style={{width:'50%',fontSize:'1.5rem',fontFamily:'fantasy',fontWeight:800}}/>
                        <Tab label="注册" {...a11yProps(1)} style={{width:'50%',fontSize:'1.5rem',fontFamily:'fantasy',fontWeight:800}}/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <br />
                    <br />
                    <p> 用户名:</p>
                    <input
                        placeholder="请输入用户名..."
                        onChange={(event) => {
                            setUserlogincode(event.target.value);
                        }}
                        maxLength={10}
                        required
                        className={styles.textField}
                    />
                    <span id='hid' style={{ display: 'none', color: 'red' }}>此输入框不能为空</span>
                    <span id='hid1' style={{ display: 'none', color: 'red' }}>✔</span>
                    <br />
                    <p>密码:</p>
                    <input
                        placeholder="请输入密码..."
                        onChange={(event) => { setUserloginpwd(event.target.value); }} maxLength={18}
                        required
                        className={styles.textField}
                        type='password'
                    />
                    <span id='pwdhid' style={{ display: 'none', color: 'red' }}>此输入框不能为空</span>
                    <br />
                    <br />
                    <ButtonGroup type="primary" className={styles.buttongroup}>
                        <Button
                            className={styles.button}
                            onClick={loginHandleClick}
                        >登陆
                        </Button>
                    </ButtonGroup>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <br />
                    <br />
                    <p> 用户名:</p>
                    <input
                        placeholder="请输入用户名..."
                        onChange={(event) => {
                            setUsercode(event.target.value);
                        }}
                        maxLength={10}
                        required
                        className={styles.textField}
                    />
                    <span id='hid' style={{ display: 'none', color: 'red' ,marginLeft: '80px'}}>此输入框不能为空</span>
                    <br />
                    <p>密码:</p>
                    <input
                        placeholder="请输入密码..."
                        onChange={(event) => { setUserpwd(event.target.value); }} maxLength={18}
                        required
                        className={styles.textField}
                        type='password'
                    />
                    <span id='pwdhid' style={{ display: 'none', color: 'red' ,marginLeft: '80px'}}>此输入框不能为空</span>
                    <br />
                    <p>确认密码:</p>
                    <input
                        placeholder="请再次输入密码..."
                        onChange={(event) => { setUserpassword(event.target.value); }} maxLength={18}
                        required
                        className={styles.textField}
                        type='pwd'
                    />
                    <br />
                    <p>电话:</p>
                    <input
                        placeholder="请输入电话..."
                        onChange={(event) => { setTel(event.target.value); }} maxLength={18}
                        required
                        className={styles.textField}
                        type='number'
                    />
                    <br/>
                    <br/>
                    <ButtonGroup type="primary" className={styles.buttongroup}>
                        <Button
                            className={styles.button}
                            onClick={regHandleClick}
                        >注册
                        </Button>
                    </ButtonGroup>
                </TabPanel>
            </Box>
            :''}
        </Box>
    )
}
