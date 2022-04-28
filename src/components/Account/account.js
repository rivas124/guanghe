import React, { Component, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useEffect } from 'react'
import styles from './styles.module.scss'
import axios from 'axios'
import { compose } from '@mui/system'
export default function Account(
    userInfo
) {
    console.log(userInfo)
    //   const [info , setInfo] = React.useState(null)
    //     var userInfo = []    
    //         axios.get('http://192.168.31.163:3000/getUserInfo?tel='+919876543215).then((res) => {
    //             userInfo = res.data.data[0]
    //             console.log(userInfo)
    //             setInfo(userInfo)
    //         })
    //             console.log(info)
    return (
        <Box className={styles.root}>
            <h2>Account Settings</h2>
                <span>First Name</span><br/>
                <input type='text' className={styles.input} defaultValue={userInfo.userInfo.firstName} />

                <span className={styles.rightinputtitle}>Last Name</span>
                <input type='text' className={styles.input} defaultValue={userInfo.userInfo.lastName} /><br /><br/>

                <span>Email</span><br/>
                <input type='text' className={styles.input} defaultValue={userInfo.userInfo.email} />

                <span className={styles.rightinputtitle}>Phone number</span>
                <input type='text' className={styles.input} defaultValue={userInfo.userInfo.tel} style={{ position: 'relative', right: '25px' }}/><br /><br/>

                <span>Company</span><br/>
                <input type='text' className={styles.input} defaultValue={userInfo.userInfo.company} />

                <span className={styles.rightinputtitle}>Designation</span>
                <input type='text' className={styles.input} defaultValue={userInfo.userInfo.Desi}/><br /><br/>

                <span>Bio</span><br/>
                <textarea rows="1" cols="30" className={styles.textarea} defaultValue={userInfo.userInfo.Bio}></textarea>

                <Box>
                <Button className={styles.page1_update} variant="contained">Update</Button>
                <Button className={styles.page1_cancel}>Cancel</Button>
                </Box>
        </Box>
    )
}
