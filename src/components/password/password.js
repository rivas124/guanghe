import React, { Component } from 'react'
import { Box } from '@mui/material'
import styles from './styles.module.scss'
import Footer from '../footer/footer'
import axios from 'axios'

export default function Password() {
    var userPassword = []
    var url = "http://192.168.31.163:3000";
    var data = {}
    axios.post(url,data).then(res =>{
        console.log(res)
    })
    return (
        <Box className={styles.pwd_root}>
            <h2>Password Settings</h2>
                <span>Old password</span><br/>
                <input type='text' className={styles.pwd_input} /><br/><br/>
                <span>New password</span><br/>
                <input type='text' className={styles.pwd_input} /><br/><br/>
                <span>Confirm new password</span><br/>
                <input type='text' className={styles.pwd_input} />
            <Footer />
        </Box>
    )
}