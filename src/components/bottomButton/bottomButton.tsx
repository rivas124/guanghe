import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import styles from './styles.module.scss'

export default function buttomButtton() {
    return (
        <Box className={styles.buttonBox}>
            <Button className={styles.update} variant="contained">Update</Button>
            <Button className={styles.cancel}>Cancel</Button>
        </Box>
    )
}