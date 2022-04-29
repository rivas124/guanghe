import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import styles from './styles.module.scss'
import axios from 'axios'

export default function notification(
    userInfo
) {
    const [notification1,setNotification1] = React.useState(userInfo.userInfo.notification1);
    const [notification2,setNotification2] = React.useState(userInfo.userInfo.notification2);
    const [notification3,setNotification3] = React.useState(userInfo.userInfo.notification3);

    const handleClick1 = () =>{
        var url = 'http://192.168.31.163:3000/updateNoti'
        var data = {noti1:notification1 ,noti2:notification2,noti3:notification3,tel:919876543215}
        axios.post(url,data).then(res => {
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
    return (
        <Box className={styles.notification_root}>
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
            <Button className={styles.cancel}>Cancel</Button>
        </Box>
    </Box>
    )
  }
