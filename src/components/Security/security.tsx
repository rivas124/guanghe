import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import styles from './styles.module.scss'
import Footer from '../bottomButton/bottomButton'

export default function applicationsecurity() {
    return (
        <Box className={styles.security_root}>
        <h2>Security Settings</h2>
        <form>
            <p>Login</p>
            <input type='text' className={styles.security_input} />
            <p>Two-factor auth</p>
            <input type='text' className={styles.security_input} />
            <br />
            <input type='checkbox' className={styles.security_checkbox}/>
            <p style={{display:'inline'}}> Recovery</p>
        </form>
            <Footer />
    </Box>
    )
}
