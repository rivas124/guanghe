import React, { Component } from 'react'
import { Box } from '@mui/material'
import './styles.scss'
import Footer from '../footer/footer'

export default function Password() {
    return (
        <Box className='pwd-root'>
            <h2>Password Settings</h2>
                <span>Old password</span><br/>
                <input type='text' className='pwd-input' />
                <span>New password</span>
                <input type='text' className='pwd-input' /><br/><br/>
                <span>Confirm new password</span><br/>
                <input type='text' className='pwd-input' />
            <Footer />
        </Box>
    )
}