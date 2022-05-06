import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import styles from './styles.module.scss'
import Footer from '../bottomButton/bottomButton'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import { useRouter } from "next/router";

export default function applicationsecurity(userInfo) {

    const [login, setLogin ] = React.useState("");
    const [twofactor , setTwoFactor ] = React.useState("");
    const [recovery, setRecovery ] = React.useState(userInfo.userInfo.Recovery);
    const [alert , setAlert] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        axios.get('http://192.168.31.163:3000/getUserInfo?tel='+919876543215).then((res) => {
            console.log(res)
            var userinfo = res.data.data[0]
            setLogin(userinfo.Login)
            setTwoFactor(userinfo.TwoFactor)
        })
    },[])

    const updateClick = () => {
        var url = 'http://192.168.31.163:3000/updateFactor'
        var data = {Login:login,TwoFactor:twofactor,tel: userInfo.userInfo.tel,Recovery:recovery}
        axios.post(url,data).then(res => {
            setAlert(true)
        })
    }

    const handleChange= () => {
        if(recovery ===1){
            setRecovery(2)
        }else if(recovery === 2){
            setRecovery(1)
        }
    }
    console.log(recovery)
    console.log(login)

    const getback = () => {
        router.push('/')
    }
    return (
        <Box className={styles.security_root}>
            <Box>
            {alert ? 
            <Alert 
            severity="success" 
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
          修改成功
        </Alert>
                :<></>}
            </Box>
        <h4>Security Settings</h4>
        <form>
            <p>Login</p>
            <input type='text' className={styles.security_input}  defaultValue={login}
                onChange={(e) => {
                    setLogin(e.target.value);
                }}
            />
            <p>Two-factor auth</p>
            <input type='text' className={styles.security_input} defaultValue={twofactor}
                onChange={(e) => {
                    setTwoFactor(e.target.value);
                }}
            />
            <br />
            <input type='checkbox' className={styles.security_checkbox} defaultChecked={userInfo.userInfo.Recovery==2} onChange = {handleChange}/>
            <p style={{display:'inline'}}> Recovery</p>
        </form>
        <Button className={styles.page1_update} variant="contained" onClick={updateClick}>Update</Button>
                <Button className={styles.page1_cancel} onClick={getback}>Cancel</Button>
    </Box>
    )
}
