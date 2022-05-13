import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import styles from './styles.module.scss'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useRouter } from "next/router";

export default function notification(
    userInfo: { userInfo: { notification1: number; notification2: number; notification3: number; }; }
) {
    const [notification1,setNotification1] = React.useState(userInfo.userInfo.notification1);
    const [notification2,setNotification2] = React.useState(userInfo.userInfo.notification2);
    const [notification3,setNotification3] = React.useState(userInfo.userInfo.notification3);
    const [alert , setAlert] = React.useState(false);
    const router = useRouter();
    const handleClick1 = () =>{
        var url = 'http://192.168.31.163:3000/updateNoti'
        var data = {noti1:notification1 ,noti2:notification2,noti3:notification3,tel:919876543215}
        axios.post(url,data).then(res => {
            setAlert(true)
        })
    }

    const handleChange = () => {
        if(notification1 === 1){
            setNotification1(2)
        }else if(notification1  === 2){
            setNotification1(1)
        }
    }
    const handleChange2 = () => {
        if(notification2 === 1){
            setNotification2(2)
        }else if(notification2  === 2){
            setNotification2(1)
        }
    }
    const handleChange3 = () => {
        if(notification3 === 1){
            setNotification3(2)
        }else if(notification3  === 2){
            setNotification3(1)
        }
    }
    const getback = () => {
        router.push('/')
    }
    return (
        <Box className={styles.notification_root}>
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
        <h4>Notification Settings</h4>
        <form>
        <input type='checkbox' className={styles.notification_checkbox} defaultChecked={userInfo.userInfo.notification1==2}
            onChange = {handleChange}
        />
        <p style={{display:'inline'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium accusamus, <br/>
        neque cupiditate quis</p>
        <br/><br/>
        <input type='checkbox' className={styles.notification_checkbox} defaultChecked={userInfo.userInfo.notification2==2}
            onChange = {handleChange2}
        />
        <p style={{display:'inline'}}>hic nesciunt repellat perferendis voluptatum totam porro eligendi.</p>
        <br/><br/>
        <input type='checkbox' className={styles.notification_checkbox} defaultChecked={userInfo.userInfo.notification3==2}
            onChange = {handleChange3}
        />
        <p style={{display:'inline'}}> commodi fugiat molestiae tempora corporis. Sed dignissimos suscipit.</p>
        </form>
        <Box className={styles.buttonBox}>
            <Button className={styles.update} variant="contained" onClick={handleClick1}>Update</Button>
            <Button className={styles.cancel} onClick={getback}>Cancel</Button>
        </Box>
    </Box>
    )
  }
