import React, { Component } from 'react'
import styles from './regform.module.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Img from '../../../assets/images/regbackimg1.jpeg'
import axios from 'axios';
import Link from 'next/link'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function regform() {
    const router = useRouter();
    const [usercode, setUsercode] = React.useState('');
    const [userpwd, setUserpwd] = React.useState('');
    const [userpassword, setUserpassword] = React.useState('');
    const [tel, setTel] = React.useState('');
    const [alert , setAlert] = React.useState(false);
    const [alert1 , setAlert1] = React.useState(false);
    const [alert2 , setAlert2] = React.useState(false);
    const handleClick = () => {
        if(userpwd !== userpassword){
            setAlert2(true)
        }else if(usercode === '' || userpwd === '' || userpassword === '' || tel === ''){
            setAlert1(true)
        }else{
        var url = "http://192.168.31.163:3000/register";
        var data = { "usercode": usercode, "userpwd": userpwd, "tel": tel }
        axios.post(url, data,).then(res => {
            if (res.data.code === -1) {
                setAlert(true)
            } else {
                router.push('/login');
            }
        })
    }
}
    return (
        <Box className={styles.root}>
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
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
          注册失败,请重试
        </Alert>
                :<></>}
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
                setAlert(false);
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
            {alert2 ? 
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
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
         两次密码输入不一致
        </Alert>
                :<></>}
            </Box>
            <Box className={styles.form}>
                <h3>
                    欢迎注册
                </h3>
                <br />
                <br />
                <TextField
                    label="请输入用户名..."
                    onChange={(event) => { setUsercode(event.target.value); }} maxLength={10}
                    variant="standard"
                    focused
                    className={styles.input}
                />
                <br />
                <br />
                <TextField
                    label="请输入密码..."
                    type='password'
                    onChange={(event) => {
                        setUserpwd(event.target.value);
                    }}
                    maxLength={18}
                    variant="standard"
                    focused
                    className={styles.input}
                />
                <br />
                <br />
                <TextField
                    label="请输入密码..."
                    type='password'
                    onChange={(event) => {
                        setUserpassword(event.target.value);
                    }}
                    maxLength={18}
                    variant="standard"
                    focused
                    className={styles.input}
                />
                <br />
                <br />
                <TextField
                    label="请输入11位手机号..."
                    onChange={(event) => { setTel(event.target.value); }}

                    type='number'
                    tel={tel}
                    variant="standard"
                    focused
                    className={styles.input}
                    onInput={e => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11);
                    }}
                />
                {/* <br />
                <br /> 
                <label>账号:{usercode}密码:{userpwd}电话:{tel}</label> */}
                <br />
                <br />
                <ButtonGroup type="primary"
                    className={styles.buttongroup}
                    onClick={handleClick}
                >
                    <Button
                        className={styles.button}
                    >注册</Button></ButtonGroup>
                <br />
                {/* <ButtonGroup type="primary" className={styles.buttongroup}>
                    <Button type="primary" className={styles.button} onClick={
                        function login() { router.push('/') }}>已有账户,请登录</Button>
                </ButtonGroup> */}
                <Link href='/login'>
                    <a className={styles.link}>已有账户,去登录</a>
                </Link>
            </Box>
        </Box>
    )
}
