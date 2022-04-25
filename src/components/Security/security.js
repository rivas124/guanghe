import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import './styles.scss'
import Footer from '../footer/footer'

export default function applicationsecurity() {
    return (
        <Box className='security-root'>
        <h2>Security Settings</h2>
        <form>
            <h5>Login</h5>
            <input type='text' className='security-input' />
            <h5>Two-factor auth</h5>
            <input type='text' className='security-input' />
            <input type='checkbox' className='security-checkbox'/>
            <p style={{display:'inline'}}> Recovery</p>
        </form>
            <Footer />
    </Box>
    )
}
