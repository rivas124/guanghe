import React, { Component, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useEffect } from 'react'
import styles from './styles.module.scss'
import axios from 'axios'
import { compose } from '@mui/system'
export default function Account(
    userInfo
) {
    return (
        <Box className={styles.root}>
            <h2>Account Settings</h2>
                <span >First Name</span><br/>
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
                <textarea className={styles.textarea} defaultValue={userInfo.userInfo.Bio}></textarea>

                <Box>
                <Button className={styles.page1_update} variant="contained">Update</Button>
                <Button className={styles.page1_cancel}>Cancel</Button>
                </Box>
        </Box>
    )
}
