import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import styles from './styles.module.scss'
import Footer from '../bottomButton/bottomButton'

export default function application() {
    return (
        <Box className={styles.application_root}>
            <h2>Application Settings</h2>
            <form>
            <input type='checkbox' className={styles.application_checkbox}/>
            <p style={{display:'inline'}}> App check</p>
            <br/>
            <input type='checkbox' className={styles.application_checkbox}/>
            <p style={{display:'inline'}}> Lorem ipsum dolor sit.</p>
            </form>
            <Footer />
        </Box>
    )
}
