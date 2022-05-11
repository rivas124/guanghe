import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import styles from './styles.module.scss'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useRouter } from "next/router";

export default function application(
    userInfo: { userInfo: { app1: number; Lorem: number; }; }
) {
    const [appcheck,setAppCheck] = React.useState(userInfo.userInfo.app1);
    const [lotrm,setLotrm] = React.useState(userInfo.userInfo.Lorem);
    const [alert , setAlert] = React.useState(false);
    const router = useRouter();
    const handleClick = () =>{
        var url = 'http://192.168.31.163:3000/updateApp'
        var data = {app1:appcheck , Lorem:lotrm,tel:919876543215}
        axios.post(url,data).then(res => {
            setAlert(true)
        })
    }

    const handleChange = () => {
        if(appcheck === 1){
            setAppCheck(2)
        }else if(appcheck  === 2){
            setAppCheck(1)
        }
    }
    const handleChange1 = () => {
        if(lotrm  === 1){
            setLotrm(2)
        }else if(lotrm  === 2){
            setLotrm(1)
        }
    }
    const getback = () => {
        router.push('/')
    }
    return (
        <Box className={styles.application_root}>
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
            <h4>Application Settings</h4>
            <form>
            <input type='checkbox' className={styles.application_checkbox} defaultChecked={userInfo.userInfo.app1==2} 
                onChange = {handleChange}
            />
            <p style={{display:'inline'}}> App check</p>
            <br/>
            <input type='checkbox' className={styles.application_checkbox} defaultChecked={userInfo.userInfo.Lorem==2}
                onChange = {handleChange1}
            />
            <p style={{display:'inline'}}> Lorem ipsum dolor sit.</p>
            </form>
            <Box className={styles.buttonBox}>
            <Button className={styles.update} variant="contained" onClick={handleClick}>Update</Button>
            <Button className={styles.cancel} onClick={getback}>Cancel</Button>
        </Box>
        </Box>
    )
}
